import { Text, ActivityIndicator } from 'react-native';
import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import {
  COLORS, FONTS, SIZES,
} from '../../constant';

function CustomButton({
  title,
  enabled,
  onPress,
  buttonStyle,
  textStyle,
  isLoading,
}) {
  return (
    <RectButton
      style={{
        height: 48,
        alignItems: 'center',
        alignContent: 'center',
        paddingVertical: SIZES.padding1,
        backgroundColor: enabled ? COLORS.primaryPurple4 : COLORS.neutral2,
        borderRadius: SIZES.radius2,
        ...buttonStyle,
      }}
      enabled={enabled}
      onPress={onPress}
    >
      {isLoading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={[FONTS.bodyLargeMedium, {
          color: COLORS.neutral1,
          marginLeft: SIZES.base,
          textAlignVertical: 'center',
          ...textStyle,
        }]}
        >
          {title}
        </Text>
      )}
    </RectButton>
  );
}

export default CustomButton;
