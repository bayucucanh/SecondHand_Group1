import { Text, ActivityIndicator } from 'react-native';
import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { neutral1, primaryPurple2, primaryPurple4 } from '../../constant/color';

function CustomButton({
  title, enabled, onPress, buttonStyle, textStyle, isLoading
}) {
  return (
    <RectButton
      style={{
        height: 48,
        alignItems: 'center',
        alignContent: 'center',
        paddingVertical: 12,
        backgroundColor: enabled ? primaryPurple4 : primaryPurple2,
        borderRadius: 12,
        marginTop: 20,
        ...buttonStyle,
      }}
      enabled={enabled}
      onPress={onPress}
    >
      {isLoading ? (
        <ActivityIndicator color="white" />
      ) : (
          <Text style={{
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        color: neutral1,
        marginLeft: 8,
        textAlignVertical: 'center',
        ...textStyle,
      }}
      >
        {title}
      </Text>
      )}

    </RectButton>
  );
}

export default CustomButton;
