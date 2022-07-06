/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import codePush from 'react-native-code-push';
import crashlytics from '@react-native-firebase/crashlytics';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {
  Text, View,
} from 'react-native';
import Router from './router';
import { Store, Persistor } from './redux/store';
import { LoginImage } from './assets';
import { initI18n } from './utils/language/i18n';
import Language from './service/Language';

const CodePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_START,
  mandatoryInstallMode: codePush.InstallMode.IMMEDIATE,
  updateDialog: {
    appendReleaseDescription: true,
  },
};

function App() {
  useEffect(() => {
    initI18n();
  }, []);

  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={Persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
}

export default codePush(CodePushOptions)(App);
