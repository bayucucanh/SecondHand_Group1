import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { loginUser } from '../../../redux/actions';
import { loginValidationSchema, showSuccess } from '../../../utils';
import {
  InputText, CustomButton, Header, HelperText, LoadingScreen,
} from '../../../components';
import { COLORS, FONTS, SIZES } from '../../../constant';

function Login() {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.global.isLoading);

  const onLogin = (value) => {
    dispatch(loginUser(value.email, value.password, navigation));
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.container} testID="Login">
        <Header />
        <View style={{ marginHorizontal: SIZES.padding5, marginTop: SIZES.padding5, flex: 1 }}>
          <Text style={[FONTS.headingLargeBold, { color: COLORS.neutral5 }]}>{t('loginTitle')}</Text>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => onLogin(values)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              dirty,
              touched,
              values,
              errors,
              isValid,
            }) => (
              <>
                <View style={{ marginTop: SIZES.padding5 }}>
                  <Text style={styles.text}>
                    {t('emailTitle')}
                  </Text>
                  <InputText
                    name="email"
                    placeholder={t('emailPlaceholder')}
                    style={styles.textInput}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    error={touched.email && errors.email}
                    keyboardType="email-address"
                  />
                </View>
                {touched.email && errors.email && (
                <HelperText text={t(errors.email)} />
                )}

                <View style={[styles.inputContainer, { marginTop: SIZES.padding3 }]}>
                  <Text style={styles.text}>
                    {t('passwordTitle')}
                  </Text>
                  <InputText
                    style={styles.textInput}
                    name="password"
                    placeholder={t('passwordPlaceholder')}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    error={touched.password && errors.password}
                    value={values.password}
                    secureTextEntry
                  />
                </View>
                {touched.password && errors.password && (
                <HelperText text={t(errors.password)} />
                )}

                <CustomButton
                  onPress={handleSubmit}
                  title={t('loginButton')}
                  enabled={isValid && !errors.email && !errors.password && dirty}
                  buttonStyle={{ marginTop: SIZES.padding5 }}
                  isLoading={isLoading}
                />
              </>
            )}
          </Formik>
        </View>
        <View style={styles.goToRegister}>
          <Text style={{ ...FONTS.bodyNormalRegular, color: COLORS.neutral5, marginRight: 5 }}>
            {t('belumPunyaAkun')}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
          >
            <Text style={{ ...FONTS.bodyNormalBold, color: COLORS.primaryPurple4 }}>
              {t('goToRegister')}
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

export default Login;

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
  },
  goToRegister: {
    bottom: 0,
    paddingVertical: SIZES.padding4,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
});
