import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { COLORS, FONTS, SIZES } from '../../constant';

function InputDropdown({
  data, setFieldValue, initialData, placeholder, multiple, schema, mode, name, error,
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(initialData);
  const [items, setItems] = useState(data);
  const checkError = () => {
    if (error) {
      return COLORS.alertDanger;
    }
    if (value == null || value.length === 0) {
      return COLORS.neutral2;
    } if (value) {
      return COLORS.neutral5;
    }
    return COLORS.neutral2;
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <DropDownPicker
        schema={schema}
        multiple={multiple}
        min={0}
        max={5}
        open={open}
        value={value}
        items={items}
        onChangeValue={() => setFieldValue(name, value, true)}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        searchable
        mode={mode}
        listMode="MODAL"
        badgeDotColors={['#e76f51', '#00b4d8', '#e9c46a', '#e76f51', '#8ac926', '#00b4d8', '#e9c46a']}
        placeholder={placeholder}
        style={[FONTS.bodyNormalRegular, {
          borderRadius: SIZES.radius2,
          borderWidth: 2,
          borderColor: checkError(),
          justifyContent: 'center',
          paddingHorizontal: SIZES.padding3,
        }]}
        placeholderStyle={[FONTS.bodyNormalRegular, styles.placeholderStyle]}
        searchTextInputStyle={[FONTS.bodyNormalRegular, styles.textStyle]}
        labelStyle={[FONTS.bodyNormalRegular, styles.textStyle]}
        listItemLabelStyle={[FONTS.bodyNormalRegular, styles.textStyle]}
      />
    </View>
  );
}

export default InputDropdown;

const styles = StyleSheet.create({
  placeholderStyle: {
    color: COLORS.neutral3,
  },
  textStyle: {
    color: COLORS.neutral5,
  },
});
