import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  alertDanger, neutral2, neutral3, neutral5,
} from '../../constant/color';

function InputDropdown({
  data, setFieldValue, initialData, placeholder, multiple, schema, mode, name, error,
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(initialData);
  const [items, setItems] = useState(data);
  const checkError = () => {
    if (error) {
      return alertDanger;
    }
    if (value.length === 0) {
      return neutral2;
    } if (value) {
      return neutral5;
    }
    return neutral2;
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
        style={{
          borderRadius: 16,
          borderWidth: 2,
          borderColor: checkError(),
          justifyContent: 'center',
          paddingHorizontal: 16,
          fontFamily: 'Poppins-Regular',
          fontSize: 14,
        }}
        placeholderStyle={styles.placeholderStyle}
        searchTextInputStyle={styles.textStyle}
        labelStyle={styles.textStyle}
        listItemLabelStyle={styles.textStyle}
      />
    </View>
  );
}

export default InputDropdown;

const styles = StyleSheet.create({
  placeholderStyle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: neutral3,
  },
  textStyle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: neutral5,
  },
});
