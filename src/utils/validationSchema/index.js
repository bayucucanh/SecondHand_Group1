import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required('Email is a required field'),
  password: yup
    .string()
    .min(8, 'Password must contain 8 character')
    .required('Password is a required field'),
});
export const registerValidationSchema = yup.object().shape({
  full_name: yup
    .string()
    .min(2, 'To Short!')
    .max(50, 'To Long!')
    .required('Required'),
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  phone_number: yup
    .string()
    .min(2, 'To Short!')
    .max(50, 'To Long!')
    .required('Required'),
  address: yup
    .string()
    .min(2, 'To Short!')
    .max(50, 'To Long!')
    .required('Required'),
});