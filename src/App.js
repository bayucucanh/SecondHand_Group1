/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import codePush from 'react-native-code-push';
import crashlytics from '@react-native-firebase/crashlytics';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Router from './router';
import { Store, Persistor } from './redux/store';

const CodePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_START,
  mandatoryInstallMode: codePush.InstallMode.IMMEDIATE,
  updateDialog: {
    appendReleaseDescription: true,
  },
};

function App() {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={Persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
}

export default codePush(CodePushOptions)(App);
