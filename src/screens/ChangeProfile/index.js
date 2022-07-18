import {
  View, Text, TextInput, ScrollView, StyleSheet, Dimensions,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { COLORS, FONTS, SIZES } from '../../constant';
import { regions } from '../../constant/regions';
import {
  Header, InputText, InputDropdown, CustomButton, HelperText, PhotoProfile, Loading, LoadingScreen,
} from '../../components';
import { profileValidationSchema, showInfo } from '../../utils';
import { getDataProfile } from '../../redux/actions/getDataProfile';
import { putDataProfile } from '../../redux/actions/pushDataProfile';
import { Avatar } from '../../assets';

function ChangeProfile({ navigation, route }) {
  const { t } = useTranslation();
  const profileData = useSelector((state) => state.profile.profileData);
  const accessToken = useSelector((state) => state.login.userData.access_token);
  const isLoading = useSelector((state) => state.global.isLoading);
  const dispatch = useDispatch();
  const { data } = route.params;

  useEffect(() => {
    if (!data) {
      showInfo(t('profileDataNotComplete'));
    }
  }, []);

  const onUpdate = async (values) => {
    const formdata = new FormData();
    formdata.append('full_name', values.full_name);
    formdata.append('city', values.city);
    formdata.append('address', values.address);
    formdata.append('phone_number', values.phone_number);
    if (values.image_url !== profileData.image_url) {
      formdata.append('image', {
        uri: values.image_url.uri,
        type: 'image/jpeg',
        name: values.image_url.fileName,
      });
    }
    console.log(values.image_url);
    await dispatch(putDataProfile(accessToken, formdata, navigation));
  };

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={{
          backgroundColor: COLORS.neutral1, paddingBottom: SIZES.padding6, paddingTop: 20, height: SIZES.height,
        }}
        >
          <Header title={!data ? t('completeProfileTitle') : t('changeProfileTitle')} />
          <Formik
            validationSchema={profileValidationSchema}
            initialValues={{
              full_name: profileData.full_name,
              city: profileData.city,
              address: profileData.address,
              phone_number: profileData.phone_number,
              image_url: profileData.image_url,
            }}
            onSubmit={(values) => onUpdate(values)}
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
                <View style={{ marginVertical: SIZES.padding5 }}>
                  <PhotoProfile
                    name="image_url"
                    image={values.image_url ? { uri: values.image_url } : Avatar}
                    setFieldValue={setFieldValue}
                    icon="camera"
                    colorIcon={COLORS.primaryPurple4}
                    styleImage={!values.image_url && { marginTop: 20 }}
                  />
                </View>
                <View style={{ marginHorizontal: SIZES.padding5 }}>
                  <Text style={styles.inputLabel}>{t('fullnameTitle')}</Text>
                  <InputText
                    placeholder={t('fullnamePlaceholder')}
                    name="full_name"
                    onChangeText={handleChange('full_name')}
                    onBlur={handleBlur('full_name')}
                    error={touched.full_name && errors.full_name}
                    value={values.full_name}
                  />
                  {touched.full_name && errors.full_name && (
                  <HelperText text={t(errors.full_name)} />
                  )}

                  <Text style={styles.inputLabel}>{t('cityTitle')}</Text>
                  <InputDropdown
                    data={regions}
                    setFieldValue={setFieldValue}
                    value={values.city}
                    initialData={values.city}
                    name="city"
                    placeholder={t('cityPlaceholder')}
                  />
                  { touched.city && errors.city && (
                  <HelperText text={t(errors.city)} />
                  )}

                  <Text style={styles.inputLabel}>{t('addressTitle')}</Text>
                  <InputText
                    name="address"
                    onChangeText={handleChange('address')}
                    onBlur={handleBlur('address')}
                    error={touched.address && errors.address}
                    value={values.address}
                    placeholder={t('addressPlaceholder')}
                    style={{ textAlignVertical: 'top', height: 80 }}
                  />
                  { touched.address && errors.address && (
                  <HelperText text={t(errors.address)} />
                  )}
                  <Text style={styles.inputLabel}>{t('phoneNumberTitle')}</Text>
                  <InputText
                    name="phone_number"
                    onChangeText={handleChange('phone_number')}
                    onBlur={handleBlur('phone_number')}
                    error={touched.phone_number && errors.phone_number}
                    value={values.phone_number}
                    placeholder={t('phoneNumberPlaceholder')}
                    type="phone-pad"
                    maxLength={18}
                  />
                  { touched.phone_number && errors.phone_number && (
                  <HelperText text={t(errors.phone_number)} />
                  )}
                  <CustomButton
                    onPress={handleSubmit}
                    title={t('changeProfileTitle')}
                    buttonStyle={{ marginTop: SIZES.padding5 }}
                    enabled={isValid && !errors.full_name
                  && !errors.city && !errors.address && !errors.phone_number}
                  />
                </View>
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
      {isLoading && (
      <LoadingScreen />
      )}
    </>
  );
}

export default ChangeProfile;

const styles = StyleSheet.create({
  inputLabel: {
    marginLeft: 3,
    ...FONTS.bodyNormalRegular,
    color: COLORS.neutral5,
    marginTop: SIZES.padding3,
  },
});
