import {
  View, Text, TextInput, ScrollView, StyleSheet, Dimensions,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {
  alertDanger,
  neutral1, neutral5, primaryPurple1, primaryPurple4,
} from '../../constant/color';
import { regions } from '../../constant/regions';
import {
  Header, InputText, InputDropdown, CustomButton, HelperText, PhotoProfile, Loading,
} from '../../components';
import { profileValidationSchema } from '../../utils';
import { getDataProfile } from '../../redux/actions/getDataProfile';

const { height, width } = Dimensions.get('screen');

function ChangeProfile() {
  const profileData = useSelector((state) => state.profile.profileData);
  const accessToken = useSelector((state) => state.login.userData.access_token);
  const dispatch = useDispatch();
  // const [tempCity, setTempCity] = useState('');
  // const [tempAddress, setTempAddress] = useState('');

  useEffect(() => {
    dispatch(getDataProfile(accessToken));
    // getCityAddress();
  }, []);

  // const getCityAddress = () => {
  //   const data = profileData.address.split(',');
  //   if (data.length > 2) {
  //     let temp = '';
  //     for (let i = 0; i < data.length - 1; i += 1) {
  //       temp += data[i];
  //     }
  //     setTempAddress(temp);
  //     setTempCity(data[data.length - 1]);
  //   } else {
  //     setTempAddress(data[0]);
  //     setTempCity(data[1].trim());
  //   }
  // };

  return (
    <ScrollView
      nestedScrollEnabled
      showsVerticalScrollIndicator={false}
    >
      <View style={{
        flex: 1, backgroundColor: neutral1, paddingBottom: 32, paddingTop: 20, height,
      }}
      >
        <Header title="Lengkapi info akun" />
        {/* {tempAddress !== '' && tempCity !== '' ? ( */}
        <Formik
          validationSchema={profileValidationSchema}
          initialValues={{
            full_name: profileData.full_name,
            city: profileData.city,
            address: profileData.address,
            phone_number: profileData.phone_number,
            image_url: null,
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
            touched,
          }) => (
            <>
              <PhotoProfile image={values.image} setFieldValue={setFieldValue} />
              <View style={{ marginHorizontal: 24 }}>
                <Text style={styles.inputLabel}>Nama*</Text>
                <InputText
                  placeholder="Nama"
                  name="full_name"
                  onChangeText={handleChange('full_name')}
                  onBlur={handleBlur('full_name')}
                  error={touched.full_name && errors.full_name}
                  value={values.full_name}
                  type="email-address"
                />
                {touched.full_name && errors.full_name && (
                  <HelperText text={errors.full_name} />
                )}

                <Text style={styles.inputLabel}>Kota*</Text>
                <InputDropdown
                  data={regions}
                  city={setFieldValue}
                  value={values.city}
                  initialData={values.city}
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
                  enabled={isValid && !errors.name
                  && !errors.city && !errors.address && !errors.phone_number}
                />
              </View>
            </>
          )}
        </Formik>
        {/* ) : (
          <Loading size="large" color="grey" />
        )} */}
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
