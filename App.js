import {Text, View, Button } from 'react-native'
import React, {useEffect} from 'react'
import codePush from 'react-native-code-push';
import crashlytics from '@react-native-firebase/crashlytics';

const CodePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_START,
  mandatoryInstallMode: codePush.InstallMode.IMMEDIATE,
  updateDialog: {
    appendReleaseDescription: true,
  },
};

const App = () => {

  useEffect(() => {
    crashlytics().log('App mounted.');
  }, []);
  
  return (
    <View>
      <Button title="Test Crash" onPress={() => crashlytics().crash()} />
    </View>
  )
}

export default codePush(CodePushOptions)(App);