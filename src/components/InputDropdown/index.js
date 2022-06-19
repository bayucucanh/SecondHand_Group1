import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { neutral2, neutral3, neutral5 } from '../../constant/color';

function InputDropdown({ data, city }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(data);

  return (
    <View style={{ flexDirection: 'row' }}>
      <DropDownPicker
        name="city"
        open={open}
        value={value}
        items={items}
        onChangeValue={() => city('city', value, true)}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        searchable
        listMode="MODAL"
        placeholder="Pilih kota"
        style={{
          borderRadius: 16,
          borderWidth: 2,
          borderColor: value ? neutral5 : neutral2,
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
