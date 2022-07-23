import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SIZES, COLORS, FONTS } from '../../constant';
import { SelectionImage } from '../../assets';

function Empty({ title }) {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: SIZES.height * 0.3,
      }}
    >
      <SelectionImage width={SIZES.width * 0.6} height={SIZES.width * 0.4} />
      <Text
        style={{
          color: COLORS.neutral3,
          textAlign: 'center',
          ...FONTS.bodyLargeRegular,
          marginTop: SIZES.padding3,
        }}
      >
        {title}
      </Text>
    </View>
  );
}

export default Empty;

const styles = StyleSheet.create({});
