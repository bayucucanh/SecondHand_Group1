import {Text, View } from 'react-native'
import React from 'react'
import codePush from 'react-native-code-push';

const CodePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_START,
  mandatoryInstallMode: codePush.InstallMode.IMMEDIATE,
  updateDialog: {
    appendReleaseDescription: true,
  },
};

const App = () => {
  return (
    <View>
      <Text>Test</Text>
    </View>
  )
}

export default codePush(CodePushOptions)(App);