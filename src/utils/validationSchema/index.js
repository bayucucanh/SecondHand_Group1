import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .matches(/[a-z0-9._-]+@[a-z0-9]+\.[a-z]/)
    .required('Email is a required field'),
  password: yup
    .string()
    .min(8, 'Password must contain 8 character')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number',
    )
    .required('Password is a required field'),
});
export const registerValidationSchema = yup.object().shape({
  full_name: yup
    .string()
    .min(2, 'To Short!')
    .max(50, 'To Long!')
    .required('Fullname is Required'),
  email: yup
    .string()
    .email('Please enter valid email')
    .matches(/[a-z0-9._-]+@[a-z0-9]+\.[a-z]/)
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number',
    )
    .required('Password is required'),
  phone_number: yup
    .string()
    .min(9, 'To Short!')
    .max(11, 'To Long!')
    .required('Phone Number is Required'),
  city: yup
    .string()
    .min(2, 'To Short!')
    .max(20, 'To Long!')
    .required('City is Required'),
  address: yup
    .string()
    .min(10, 'To Short!')
    .max(150, 'To Long!')
    .required('Address is Required'),
});

export const profileValidationSchema = yup.object().shape({
  full_name: yup
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

export const productValidationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Nama produk telalu pendek!')
    .max(50, 'Nama produk telalu panjang!')
    .required('Nama produk tidak boleh kosong!'),
  description: yup
    .string()
    .min(2, 'Deskripsi telalu pendek!')
    .max(50, 'Deskripsi telalu panjang!')
    .required('Deskripsi tidak boleh kosong'),
  base_price: yup
    .number()
    .required('Harga produk tidak boleh kosong!'),
  category_ids: yup
    .array()
    .min(1, 'Kategori harus minimal 1!')
    .required('Kategori tidak boleh kosong!'),
  location: yup
    .string()
    .required('Lokasi tidak boleh kosong'),
  image: yup
    .string()
    .required('Foto produk tidak boleh kosong'),

});
