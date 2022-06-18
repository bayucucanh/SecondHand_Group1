import {
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import { neutral2, neutral5 } from '../../constant/color';

function InputText({
  placeholder, multiline, style, type, maxLength,
}) {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <TextInput
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      multiline={multiline}
      style={{
        ...style,
        borderRadius: 16,
        borderWidth: 2,
        borderColor: isFocus ? neutral5 : neutral2,
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
