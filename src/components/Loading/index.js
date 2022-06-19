import { ActivityIndicator, View } from 'react-native';
import React from 'react';

function Loading({ size, color, style }) {
  return (
    <View style={{
      flex: 1, alignItems: 'center', justifyContent: 'center', ...style,
    }}
    >
      <ActivityIndicator size={size} color={color} />
    </View>
  );
}

export default Loading;
