import {
  View, Text, TextInput, ScrollView, StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {
  neutral1, neutral5, primaryPurple1, primaryPurple4,
} from '../../constant/color';
import { regions } from '../../constant/regions';
import {
  Header, InputText, InputDropdown, CustomButton,
} from '../../components';

function ChangeProfile() {
  return (
    <ScrollView
      nestedScrollEnabled
      showsVerticalScrollIndicator={false}
    >
      <View style={{
        flex: 1, backgroundColor: neutral1, paddingBottom: 32, paddingTop: 20,
      }}
      >
        <Header title="Lengkapi info akun" />
        <View style={{ alignItems: 'center', marginVertical: 24 }}>
          <View style={{
            width: 112,
            height: 112,
            backgroundColor: primaryPurple1,
            borderRadius: 14,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          >
            <Icon name="camera" color={primaryPurple4} size={32} />
          </View>
        </View>
        <View style={{ marginHorizontal: 24 }}>
          <Text style={styles.inputLabel}>Nama*</Text>
          <InputText placeholder="Nama" />

          <Text style={styles.inputLabel}>Kota*</Text>
          <InputDropdown data={regions} />

          <Text style={styles.inputLabel}>Alamat*</Text>
          <InputText
            placeholder="Contoh: Jalan Ikan Hiu 33"
            style={{ textAlignVertical: 'top', height: 80 }}
          />

          <Text style={styles.inputLabel}>No Handphone*</Text>
          <InputText
            placeholder="contoh: +628123456789"
            type="phone-pad"
            maxLength={18}
          />

          <CustomButton title="Simpan" />
        </View>
      </View>
    </ScrollView>
  );
}

export default ChangeProfile;

const styles = StyleSheet.create({
  inputLabel: {
    fontFamily: 'Poppins-Regular', fontSize: 14, color: neutral5, marginTop: 16,
  },
});
