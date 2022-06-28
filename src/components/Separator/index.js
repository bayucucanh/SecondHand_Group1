import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS } from '../../constant';

function Separator() {
  return (
    <View style={{ backgroundColor: COLORS.lightGray, height: 2 }} />
  );
}

export default Separator;

const styles = StyleSheet.create({});
