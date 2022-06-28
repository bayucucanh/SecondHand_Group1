import {
  shallow, configure,
} from 'enzyme';
import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Login from '../../src/screens/auth/Login';
import LoginReducer from '../../src/redux/reducers/LoginReducer';
import HomeReducer from '../../src/redux/reducers/HomeReducer';

// jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
// jest.mock('@react-native-async-storage/async-storage', () => 'AsyncStorage');
// jest.mock('react-native-code-push', () => 'codePush');
// jest.mock('@react-native-firebase/crashlytics', () => 'crashlytics');

// configure({ adapter: new Adapter(), disableLifecycleMethods: true });

// describe('Login Screen test', () => {
//   const initialState = {
//     login: LoginReducer,
//     home: HomeReducer,
//   };

//   const mockStore = configureStore();
//   const store = mockStore(initialState);
//   const loginWrapper = shallow(
//     <Provider store={store}>
//       <Login />
//     </Provider>,
//   );

//   jest.mock('@react-navigation/native', () => ({
//     useNavigation: (component) => component,
//   }));

// it('should renders `Login Screen` module correctly', () => {
//     expect(loginWrapper).toMatchSnapshot();
// });
// describe('Check component', () => {
//     it('should create find `Input`', () => {
//         expect(loginWrapper.find('Input').exists());
//     });

//     it('should create `TouchableOpacity` component', () => {
//         expect(loginWrapper.find('TouchableOpacity').exists());
//     });
// });
// });
