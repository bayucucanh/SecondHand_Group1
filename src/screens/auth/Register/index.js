import {
  StyleSheet,
  Text,
  View,
  Alert,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Formik} from 'formik';
import PhoneInput from 'react-native-phone-number-input';

import {registerValidationSchema} from '../../../utils/validationSchema';
import InputDropdown from '../../../components/InputDropdown/index';
import {regions} from '../../../constant/regions';
import {checkRegister} from '../../../redux/actions/pushDataRegister';

function Register({navigation}) {
  const isRegSukses = useSelector(state => state.register.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isRegSukses) {
      // navigation.replace('Login');
      console.log('Success');
    }
  }, [isRegSukses, navigation]);

  const onRegister = async values => {
    console.log('hahaa');
    console.log(values.phone_number);
    const data = {
      full_name: values.full_name,
      email: values.email,
      password: values.password,
      phone_number: parseInt(values.phone_number),
      address: values.address,
      image_url: null,
      city: values.city,
    };
    dispatch(checkRegister(data));
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Formik
          validationSchema={registerValidationSchema}
          initialValues={{
            full_name: '',
            email: '',
            password: '',
            phone_number: '',
            city: '',
            address: '',
          }}
          onSubmit={values => onRegister(values)}>
          {({handleChange, handleSubmit, setFieldValue, values, errors}) => (
            <>
              <TextInput
                placeholder="Nama"
                value={values.full_name}
                onChangeText={handleChange('full_name')}
                style={{borderWidth: 1, marginTop: 20}}
              />
              {errors.full_name && (
                <Text style={styles.errorText}>{errors.full_name}</Text>
              )}

              <TextInput
                placeholder="Email"
                value={values.email}
                onChangeText={handleChange('email')}
                keyboardType="email-address"
                style={{borderWidth: 1, marginTop: 20}}
              />
              {errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}

              <TextInput
                placeholder="Password"
                value={values.password}
                onChangeText={handleChange('password')}
                secureTextEntry
                style={{borderWidth: 1, marginTop: 20}}
              />
              {errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}

              <PhoneInput
                style={styles.phoneInput}
                value={values.phone_number}
                defaultCode="ID"
                layout="first"
                onChangeText={handleChange('phone_number')}
                withShadow
                containerStyle={styles.phoneInput}
                textContainerStyle={{paddingVertical: 0, borderRadius: 15}}
              />
              {errors.phone_number && (
                <Text style={{paddingBottom: 20}}>{errors.phone_number}</Text>
              )}

              <InputDropdown
                data={regions}
                city={setFieldValue}
                value={values.city}
                initialData={values.city}
                name="city"
              />
              {errors.city && (
                <Text style={styles.errorText}>{errors.city}</Text>
              )}
              <TextInput
                placeholder="Address"
                value={values.address}
                onChangeText={handleChange('address')}
                style={{borderWidth: 1, marginTop: 20}}
              />
              {errors.address && (
                <Text style={styles.errorText}>{errors.address}</Text>
              )}

              <TouchableOpacity
                onPress={handleSubmit}
                style={{
                  marginTop: 20,
                  borderWidth: 1,
                  width: 100,
                  height: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>Submit</Text>
              </TouchableOpacity>

              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Text style={{color: '#000', marginRight: 5}}>
                  Don&apos;t have an account?
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Register')}>
                  <Text style={{color: '#b12441', fontWeight: 'bold'}}>
                    Register Now
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
}

export default Register;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  phoneInput: {
    width: '100%',
    height: 50,
    borderRadius: 15,
    borderWidth: 2,
    marginTop: 20,
    borderColor: 'gray',
  },
});
