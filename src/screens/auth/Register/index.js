import {
  StyleSheet,
  Text,
  View,
  Alert,
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
import {COLORS, FONTS, SIZES} from '../../../constant';
import {InputText, CustomButton, Header} from '../../../components';

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
    console.log(
      values.full_name,
      '/n',
      values.password,
      '/n',
      values.address,
      '/n',
      values.city,
      '/n',
      values.email,
    );
    const data = {
      full_name: values.full_name,
      email: values.email,
      password: values.password,
      // eslint-disable-next-line
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
        <Header />
        <View style={{marginHorizontal: SIZES.padding}}>
          <Text style={styles.title}>Create your account!!</Text>
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
            {({
              handleChange,
              handleSubmit,
              setFieldValue,
              handleBlur,
              values,
              errors,
              isValid,
            }) => (
              <>
                <Text
                  style={{
                    ...FONTS.body3,
                    color: COLORS.black,
                    marginBottom: 5,
                    marginTop: 20,
                    marginLeft: 3,
                  }}>
                  Name
                </Text>
                <InputText
                  name="full_name"
                  placeholder="Nama"
                  value={values.full_name}
                  onChangeText={handleChange('full_name')}
                  onBlur={handleBlur('full_name')}
                  style={{borderWidth: 1}}
                />
                {errors.full_name && (
                  <Text style={styles.errorText}>{errors.full_name}</Text>
                )}
                <Text
                  style={{
                    ...FONTS.body3,
                    color: COLORS.black,
                    marginBottom: 5,
                    marginTop: 20,
                    marginLeft: 3,
                  }}>
                  Email
                </Text>
                <InputText
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  keyboardType="email-address"
                  style={{borderWidth: 1}}
                />
                {errors.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}
                <Text
                  style={{
                    ...FONTS.body3,
                    color: COLORS.black,
                    marginBottom: 5,
                    marginTop: 20,
                    marginLeft: 3,
                  }}>
                  Password
                </Text>
                <InputText
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  secureTextEntry={true}
                  style={{borderWidth: 1}}
                />
                {errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}

                <Text
                  style={{
                    ...FONTS.body3,
                    color: COLORS.black,
                    marginTop: 20,
                    marginLeft: 3,
                  }}>
                  Phone Number
                </Text>
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
                <Text
                  style={{
                    ...FONTS.body3,
                    color: COLORS.black,
                    marginBottom: 5,
                    marginTop: 20,
                    marginLeft: 3,
                  }}>
                  City
                </Text>
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
                <Text
                  style={{
                    ...FONTS.body3,
                    color: COLORS.black,
                    marginBottom: 5,
                    marginTop: 20,
                    marginLeft: 3,
                  }}>
                  Address
                </Text>
                <InputText
                  name="address"
                  placeholder="Address"
                  value={values.address}
                  onChangeText={handleChange('address')}
                  onBlur={handleBlur('address')}
                  style={{borderWidth: 1}}
                />
                {errors.address && (
                  <Text style={styles.errorText}>{errors.address}</Text>
                )}
                <CustomButton
                  onPress={handleSubmit}
                  title="Sign Up"
                  enabled={isValid}
                />
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
      </View>
    </ScrollView>
  );
}

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  title: {
    ...FONTS.title,
    color: COLORS.black,
    marginTop: 25,
    marginBottom: 20,
    fontWeight: '800',
  },
  phoneInput: {
    width: '100%',
    height: 50,
    borderRadius: 15,
    borderWidth: 2,
    marginVertical: 10,
    borderColor: 'gray',
  },
});
