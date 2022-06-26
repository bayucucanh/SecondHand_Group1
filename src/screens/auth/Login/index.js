/* eslint-disable no-unused-vars */
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { loginUser } from '../../../redux/actions';
import { loginValidationSchema } from '../../../utils';
import { InputText, CustomButton, Header } from '../../../components';
import { COLORS, FONTS, SIZES } from '../../../constant';

function Login() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onLogin = (value) => {
    dispatch(loginUser(value.email, value.password, navigation));
  };

  return (
    <View style={styles.container} testID="Login">
      <Header />
      <View style={{ marginHorizontal: SIZES.padding }}>
        <Text style={styles.title}>Login to your account!!</Text>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => onLogin(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
          }) => (
            <>
              <View style={[styles.inputContainer, { marginTop: 10 }]}>
                <Text
                  style={{
                    ...FONTS.body3,
                    color: COLORS.black,
                    marginBottom: 5,
                    marginLeft: 3,
                  }}
                >
                  Email
                </Text>
                <InputText
                  name="email"
                  placeholder="Email Address"
                  style={styles.textInput}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                />
              </View>
              {errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}

              <View style={[styles.inputContainer, { marginTop: 10 }]}>
                <Text
                  style={{
                    ...FONTS.body3,
                    color: COLORS.black,
                    marginBottom: 5,
                    marginLeft: 3,
                  }}
                >
                  Password
                </Text>
                <InputText
                  style={styles.textInput}
                  name="password"
                  placeholder="Password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                />
              </View>
              {errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}

              <CustomButton
                onPress={handleSubmit}
                title="Login"
                enabled={isValid}
              />

              <View style={styles.goToRegister}>
                <Text style={{ color: '#000', marginRight: 5 }}>
                  Don&apos;t have an account?
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Register')}
                >
                  <Text style={{ color: '#7126b5', fontWeight: 'bold' }}>
                    Sign Up!
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: SIZES.radius,
    backgroundColor: COLORS.white,
  },
  title: {
    ...FONTS.title,
    color: COLORS.black,
    marginTop: 71,
    marginBottom: 50,
    fontWeight: '800',
  },
  errorText: {
    ...FONTS.body4,
    color: COLORS.danger,
    marginLeft: 5,
    marginTop: 5,
  },
  goToRegister: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },
});
