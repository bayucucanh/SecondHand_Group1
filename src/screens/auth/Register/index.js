import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { registerValidationSchema } from '../../../utils/validationSchema';
import InputDropdown from '../../../components/InputDropdown/index';
import { regions } from '../../../constant/regions';
import { checkRegister } from '../../../redux/actions/pushDataRegister';
import { COLORS, FONTS, SIZES } from '../../../constant';
import {
  InputText, CustomButton, Header, HelperText, LoadingScreen,
} from '../../../components';

function Register({ navigation }) {
  const { t } = useTranslation();

  const isLoading = useSelector((state) => state.global.isLoading);
  const dispatch = useDispatch();

  const onRegister = async (values) => {
    const data = {
      full_name: values.full_name,
      email: values.email,
      password: values.password,
    };
    dispatch(checkRegister(data, navigation));
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Header />
        <View style={{ marginHorizontal: SIZES.padding5, marginTop: SIZES.padding5, flex: 1 }}>
          <Text style={[FONTS.headingLargeBold, { color: COLORS.neutral5 }]}>{t('registerTitle')}</Text>
          <Formik
            validationSchema={registerValidationSchema}
            initialValues={{
              full_name: '',
              email: '',
              password: '',
            }}
            onSubmit={(values) => onRegister(values)}
          >
            {({
              handleChange,
              handleSubmit,
              setFieldValue,
              handleBlur,
              dirty,
              touched,
              values,
              errors,
              isValid,
            }) => (
              <View>
                <Text style={styles.text}>
                  {t('fullnameTitle')}
                </Text>
                <InputText
                  name="full_name"
                  placeholder={t('fullnamePlaceholder')}
                  value={values.full_name}
                  onChangeText={handleChange('full_name')}
                  onBlur={handleBlur('full_name')}
                  error={touched.full_name && errors.full_name}
                />
                {touched.full_name && errors.full_name && (
                <HelperText text={t(errors.full_name)} />
                )}
                <Text style={styles.text}>
                  {t('emailTitle')}
                </Text>
                <InputText
                  name="email"
                  placeholder={t('emailPlaceholder')}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  keyboardType="email-address"
                  error={touched.email && errors.email}
                />
                {touched.email && errors.email && (
                <HelperText text={t(errors.email)} />
                )}
                <Text style={styles.text}>
                  {t('passwordTitle')}
                </Text>
                <InputText
                  name="password"
                  placeholder={t('passwordPlaceholder')}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  secureTextEntry
                  error={touched.password && errors.password}
                />
                {touched.password && errors.password && (
                <HelperText text={t(errors.password)} />
                )}
                <CustomButton
                  onPress={(handleSubmit)}
                  title={t('registerButton')}
                  enabled={isValid && !errors.full_name && !errors.email
                  && !errors.password && !errors.phone_number && !errors.city
                  && !errors.address && dirty}
                  buttonStyle={{ marginTop: SIZES.padding5 }}
                  isLoading={isLoading}
                />
              </View>
            )}
          </Formik>
        </View>
        <View style={styles.goToLogin}>
          <Text style={{ ...FONTS.bodyNormalRegular, color: COLORS.neutral5, marginRight: 5 }}>
            {t('sudahPunyaAkun')}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={{ ...FONTS.bodyNormalBold, color: COLORS.primaryPurple4 }}>
              {t('goToLogin')}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {isLoading && (
      <LoadingScreen />
      )}
    </>
  );
}

export default Register;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    paddingTop: SIZES.padding4,
  },
  text: {
    ...FONTS.bodyNormalRegular,
    color: COLORS.black,
    marginLeft: 3,
    marginTop: SIZES.padding3,
  },
  phoneInput: {
    width: '100%',
    height: 50,
    borderRadius: 15,
    borderWidth: 2,
    marginVertical: 10,
    borderColor: 'gray',
  },
  goToLogin: {
    bottom: 0,
    paddingVertical: SIZES.padding4,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
});
