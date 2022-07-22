/* eslint-disable no-param-reassign */
/* eslint-disable global-require */
/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { Provider } from 'react-redux';
import {
  fireEvent, cleanup, render, waitFor,
} from '@testing-library/react-native';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import Login from '../../src/screens/auth/Login';
import { Store } from '../../src/redux/store';

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
jest.mock('@react-native-async-storage/async-storage', () => 'AsyncStorage');
jest.mock('react-native-code-push', () => 'codePush');
jest.mock('@react-native-firebase/crashlytics', () => 'crashlytics');
jest.mock('@react-native-firebase/analytics', () => {
  jest.fn(() => ({
    logEvent: jest.fn(),
    setUserProperties: jest.fn(),
    setUserId: jest.fn(),
    setCurrentScreen: jest.fn(),
  }));
});
jest.mock('react-native-flash-message', () => ({
  hideMessage: () => jest.fn(),
  showMessage: () => jest.fn(),
  __esModule: true,
  default: jest.fn().mockReturnValue(() => <></>),
}));
jest.mock('react-native-vector-icons/Feather', () => 'Icon');

jest.mock('@react-navigation/native', () => ({
  useNavigation: (component) => component,
}));
jest.mock('react-native-dropdown-picker', () => ({
  DropDownPicker: () => jest.fn(),
}));
jest.mock('react-native-image-picker', () => ({ launchImageLibrary: jest.fn() }));
jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon');
jest.mock('react-native-reanimated', () => {
  const reanimated = require('react-native-reanimated/mock');
  reanimated.default.addWhitelistedUIProps = () => {};
  reanimated.default.addWhitelistedNativeProps = () => {};

  return reanimated;
});

jest.mock('@gorhom/bottom-sheet', () => require('react-native-reanimated/mock'));
jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  };
});
jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => ({
    t: (str) => str,
    i18n: {
      changeLanguage: () => new Promise(() => {}),
    },
  }),
}));
afterEach(cleanup);

describe('Login Screen test', () => {
  let mock;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  it('should render LoginScreen', () => {
    const { getByTestId } = render(
      <Provider store={Store}>
        <Login />
      </Provider>,
    );
    expect(getByTestId('Login')).toBeTruthy();
  });

  // it('should renders `Login Screen` module correctly', () => {
  //   expect(loginWrapper).toMatchSnapshot();
  // });
  // describe('Check component', () => {
  //   it('should create find `Input`', () => {
  //     expect(loginWrapper.find('Input').exists());
  //   });

  //   it('should create `TouchableOpacity` component', () => {
  //     expect(loginWrapper.find('TouchableOpacity').exists());
  //   });
  // });
});
