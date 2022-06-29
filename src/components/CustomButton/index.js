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
  type,
}) {
  return (
    <RectButton
      style={type ? {
        height: 48,
        alignItems: 'center',
        alignContent: 'center',
        paddingVertical: SIZES.padding1,
        backgroundColor: COLORS.neutral1,
        borderRadius: SIZES.radius2,
        ...buttonStyle,
      } : {
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
        <Text style={[FONTS.bodyLargeMedium, type ? {
          color: enabled ? COLORS.neutral5 : COLORS.neutral2,
        } : {
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
