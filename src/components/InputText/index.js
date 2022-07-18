import {
  Pressable,
  TextInput,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { FONTS, COLORS, SIZES } from '../../constant';
import { useTogglePasswordVisibility } from '../../utils/tooglePasswordVisibility';

function InputText({
  placeholder, multiline, style, type, maxLength, onChangeText, value, error, name, onBlur, secureTextEntry,
}) {
  const [isFocus, setIsFocus] = useState(false);
  const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility(secureTextEntry);
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
    <View style={{
      borderRadius: SIZES.radius2,
      borderWidth: 2,
      borderColor: checkError(),
      justifyContent: secureTextEntry ? 'space-between' : 'center',
      paddingHorizontal: SIZES.padding3,
      flexDirection: secureTextEntry && 'row',
    }}
    >
      <TextInput
        onFocus={() => setIsFocus(true)}
        onBlur={onBlur}
        multiline={multiline}
        onChangeText={onChangeText}
        value={value}
        name={name}
        secureTextEntry={passwordVisibility}
        style={[FONTS.bodyNormalRegular, {
          ...style,
          width: '90%',
          // borderRadius: SIZES.radius2,
          // borderWidth: 2,
          // borderColor: checkError(),
          // justifyContent: 'center',
          // paddingHorizontal: SIZES.padding3,
        }]}
        maxLength={maxLength}
        keyboardType={type}
        placeholder={placeholder}
      />
      {secureTextEntry && (
        <Pressable onPress={handlePasswordVisibility} style={{ justifyContent: 'center' }}>
          <Icon name={rightIcon} size={22} color="#232323" />
        </Pressable>
      )}
    </View>
  );
}

export default InputText;
