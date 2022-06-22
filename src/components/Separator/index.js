import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { lightGray } from '../../constant/color';

function Separator() {
  return (
    <View style={{ backgroundColor: lightGray, height: 2 }} />
  );
}

export default Separator;

const styles = StyleSheet.create({});
