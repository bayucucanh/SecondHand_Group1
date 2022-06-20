import * as React from 'react';
import { StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

function FocusAwareStatusBar({ barStyle, color }) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar barStyle={barStyle} backgroundColor={color} /> : null;
}

export default FocusAwareStatusBar;
