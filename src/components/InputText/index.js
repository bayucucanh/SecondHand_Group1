import {
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import { alertDanger, neutral2, neutral5 } from '../../constant/color';

function InputText({
  placeholder, multiline, style, type, maxLength, onChangeText, value, error, name, onBlur,
}) {
  const [isFocus, setIsFocus] = useState(false);

  const checkError = () => {
    if (error) {
      return alertDanger;
    }
    if (isFocus) {
      return neutral5;
    }
    return neutral2;
  };

  return (
    <TextInput
      onFocus={() => setIsFocus(true)}
      onBlur={onBlur}
      multiline={multiline}
      onChangeText={onChangeText}
      value={value}
      name={name}
      style={{
        ...style,
        borderRadius: 16,
        borderWidth: 2,
        borderColor: checkError(),
        justifyContent: 'center',
        paddingHorizontal: 16,
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
      }}
      maxLength={maxLength}
      keyboardType={type}
      placeholder={placeholder}
    />
  );
}

export default InputText;
