import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../../constant';
import Loading from '../Loading';

function LoadingScreen() {
  return (
    <View style={{
      flex: 1,
      width: SIZES.width,
      height: SIZES.height,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.6)',
    }}
    >
      <View style={{
        width: SIZES.width * 0.25,
        height: SIZES.width * 0.25,
        borderRadius: SIZES.radius2,
        backgroundColor: COLORS.white,
      }}
      >
        <Loading size="large" color={COLORS.primaryPurple4} />
      </View>
    </View>
  );
}

export default LoadingScreen;
