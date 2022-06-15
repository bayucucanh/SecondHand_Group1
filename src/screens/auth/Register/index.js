/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { registerValidationSchema } from '../../../utils/validationSchema';

import { checkRegister } from '../../../redux/actions/pushDataRegister';

function Register({ navigation }) {
  const isRegSukses = useSelector((state) => state.register.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isRegSukses) {
      // navigation.replace('Login');
      console.log('Success');
    }
  }, [isRegSukses, navigation]);

  const onRegister = async (values) => {
    console.log('hahaa');
    const data = {
      full_name: values.full_name,
      email: values.email,
      password: values.password,
      phone_number: parseInt(values.phone_number, 10),
      address: values.address,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQJxKGGpPc9-5g25KWwnsCCy9O_dlS4HWo5A&usqp=CAU',
    };
    dispatch(checkRegister(data));
  };

  return (
    <View>
      <Formik
        validationSchema={registerValidationSchema}
        initialValues={{
          full_name: '',
          email: '',
          password: '',
          phone_number: '',
          address: '',
        }}
        onSubmit={(values) => onRegister(values)}
      >
        {({
          handleChange, handleSubmit, values, errors,
        }) => (
          <>
            <TextInput
              placeholder="Nama"
              value={values.full_name}
              onChangeText={handleChange('full_name')}
              style={{ borderWidth: 1, marginBottom: 20 }}
            />
            {errors.full_name && (
            <Text style={styles.errorText}>{errors.full_name}</Text>
            )}

            <TextInput
              placeholder="Email"
              value={values.email}
              onChangeText={handleChange('email')}
              keyboardType="email-address"
              style={{ borderWidth: 1, marginBottom: 20 }}
            />
            {errors.email && (
            <Text style={styles.errorText}>{errors.email}</Text>
            )}

            <TextInput
              placeholder="Password"
              value={values.password}
              onChangeText={handleChange('password')}
              secureTextEntry
              style={{ borderWidth: 1, marginBottom: 20 }}
            />
            {errors.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
            )}

            <TextInput
              placeholder="Phone Number"
              value={values.phone_number}
              onChangeText={handleChange('phone_number')}
              keyboardType="phone-pad"
              style={{ borderWidth: 1, marginBottom: 20 }}
            />
            {errors.phone_number && (
            <Text style={styles.errorText}>{errors.phone_number}</Text>
            )}

            <TextInput
              placeholder="Address"
              value={values.address}
              onChangeText={handleChange('address')}
              style={{ borderWidth: 1, marginBottom: 20 }}
            />
            {errors.address && (
            <Text style={styles.errorText}>{errors.address}</Text>
            )}

            <TouchableOpacity onPress={handleSubmit}>
              <Text>Submit</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
}

export default Register;

const styles = StyleSheet.create({});
