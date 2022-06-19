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
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
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
export const profileValidationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Nama telalu pendek!')
    .max(50, 'Nama telalu panjang!')
    .required('Nama tidak boleh kosong!'),
  city: yup
    .string()
    .required('Kota tidak boleh kosong'),
  address: yup
    .string()
    .min(2, 'Alamat telalu pendek!')
    .max(50, 'Alamat telalu panjang!')
    .required('Alamat tidak boleh kosong!'),
  phone_number: yup
    .string()
    .min(2, 'No handphone telalu pendek!')
    .max(50, 'No handphone telalu panjang!')
    .required('No handphone tidak boleh kosong!'),
});
