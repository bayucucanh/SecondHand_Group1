import {
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import { FONTS, COLORS, SIZES } from '../../constant';

function InputText({
  placeholder, multiline, style, type, maxLength, onChangeText, value, error, name, onBlur, secureTextEntry,
}) {
  const [isFocus, setIsFocus] = useState(false);

  const checkError = () => {
    if (error) {
      return COLORS.alertDanger;
    }
    if (isFocus || value) {
      return COLORS.neutral5;
    }
    return COLORS.neutral2;
  };

  return (
    <TextInput
      onFocus={() => setIsFocus(true)}
      onBlur={onBlur}
      multiline={multiline}
      onChangeText={onChangeText}
      value={value}
      name={name}
      secureTextEntry={secureTextEntry}
      style={[FONTS.bodyNormalRegular, {
        ...style,
        borderRadius: SIZES.radius2,
        borderWidth: 2,
        borderColor: checkError(),
        justifyContent: 'center',
        paddingHorizontal: SIZES.padding3,
      }]}
      maxLength={maxLength}
      keyboardType={type}
      placeholder={placeholder}
    />
  );
}

export default InputText;
