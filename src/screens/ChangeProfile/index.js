import {
  View, Text, TextInput, ScrollView, StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { Formik } from 'formik';
import {
  alertDanger,
  neutral1, neutral5, primaryPurple1, primaryPurple4,
} from '../../constant/color';
import { regions } from '../../constant/regions';
import {
  Header, InputText, InputDropdown, CustomButton, HelperText,
} from '../../components';
import { profileValidationSchema } from '../../utils';

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
        <Formik
          validationSchema={profileValidationSchema}
          initialValues={{
            name: '', city: '', address: '', phone_number: '',
          }}
          onSubmit={(values) => console.log(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            values,
            errors,
            isValid,
            dirty,
            touched,
            isSubmitting,
          }) => (
            <View style={{ marginHorizontal: 24 }}>
              <Text style={styles.inputLabel}>Nama*</Text>
              <InputText
                placeholder="Nama"
                name="name"
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                error={touched.name && errors.name}
                value={values.name}
                type="email-address"
              />
              {touched.name && errors.name && (
                <HelperText text={errors.name} />
              )}

              <Text style={styles.inputLabel}>Kota*</Text>
              <InputDropdown
                data={regions}
                city={setFieldValue}
                value={values.city}
                name="city"
              />
              { touched.city && errors.city && (
                <HelperText text={errors.city} />
              )}

              <Text style={styles.inputLabel}>Alamat*</Text>
              <InputText
                name="address"
                onChangeText={handleChange('address')}
                onBlur={handleBlur('address')}
                error={touched.address && errors.address}
                value={values.address}
                placeholder="Contoh: Jalan Ikan Hiu 33"
                style={{ textAlignVertical: 'top', height: 80 }}
              />
              { touched.address && errors.address && (
                <HelperText text={errors.address} />
              )}
              <Text style={styles.inputLabel}>No Handphone*</Text>
              <InputText
                name="phone_number"
                onChangeText={handleChange('phone_number')}
                onBlur={handleBlur('phone_number')}
                error={touched.phone_number && errors.phone_number}
                value={values.phone_number}
                placeholder="contoh: +628123456789"
                type="phone-pad"
                maxLength={18}
              />
              { touched.phone_number && errors.phone_number && (
              <HelperText text={errors.phone_number} />
              )}
              <CustomButton
                onPress={handleSubmit}
                title="Simpan"
                enabled={dirty && isValid && !errors.name
                  && !errors.city && !errors.address && !errors.phone_number}
              />
            </View>
          )}
        </Formik>
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
