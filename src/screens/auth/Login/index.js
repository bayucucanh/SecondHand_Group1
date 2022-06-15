/* eslint-disable no-unused-vars */
import {
  StyleSheet, Text, View, TouchableOpacity, TextInput,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { loginUser } from '../../../redux/actions';
import { loginValidationSchema } from '../../../utils';

function Login() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onLogin = (value) => {
    dispatch(loginUser(value.email, value.password, navigation));
  };

  return (
    <View style={styles.container}>
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
              <TextInput
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
              <TextInput
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
              <Text style={styles.errorText}>
                {errors.password}
              </Text>
            )}

            <TouchableOpacity
              onPress={handleSubmit}
              style={styles.btn}
              disabled={!isValid}
            >
              <Text style={styles.btnText}>Login Now</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <Text style={{ color: '#000', marginRight: 5 }}>
                Don&apos;t have an account?
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Register')}
              >
                <Text style={{ color: '#b12441', fontWeight: 'bold' }}>
                  Register Now
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
  },
  btn: {
    borderWidth: 1,
    padding: 5,
    width: 90,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});
