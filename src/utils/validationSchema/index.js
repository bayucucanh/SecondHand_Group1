import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email('emailAlertMatch')
    .matches(/[a-z0-9._-]+@[a-z0-9]+\.[a-z]/)
    .required('emailAlertRequired'),
  password: yup
    .string()
    .trim()
    // .min(8, 'passwordAlertMin')
    // .matches(
    //   /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
    //   'passwordAlertMatch',
    // )
    .required('passwordAlertRequired'),
});

export const registerValidationSchema = yup.object().shape({
  full_name: yup
    .string()
    .trim()
    .min(2, 'fullnameAlertMin')
    .max(50, 'fullnameAlertMax')
    .required('fullnameAlertRequired'),
  email: yup
    .string()
    .trim()
    .email('emailAlertMatch')
    .matches(/[a-z0-9._-]+@[a-z0-9]+\.[a-z]/)
    .required('emailAlertRequired'),
  password: yup
    .string()
    .trim()
    .min(8, 'passwordAlertMin')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
      'passwordAlertMatch',
    )
    .required('passwordAlertRequired'),
  phone_number: yup
    .string()
    .trim()
    .min(9, 'phoneNumberAlertMin')
    .max(11, 'phoneNumberAlertMax')
    .required('phoneNumberAlertRequired'),
  city: yup
    .string()
    .required('cityAlertRequired'),
  address: yup
    .string()
    .trim()
    .min(1, 'addressAlertMin')
    .max(150, 'addressAlertMax')
    .required('addressAlertRequired'),
});

export const profileValidationSchema = yup.object().shape({
  full_name: yup
    .string()
    .trim()
    .min(2, 'fullnameAlertMin')
    .max(50, 'fullnameAlertMax')
    .required('fullnameAlertRequired'),
  city: yup
    .string()
    .required('cityAlertRequired'),
  address: yup
    .string()
    .trim()
    .min(2, 'addressAlertMin')
    .max(50, 'addressAlertMax')
    .required('addressAlertRequired'),
  phone_number: yup
    .string()
    .trim()
    .min(2, 'phoneNumberAlertMin')
    .max(50, 'phoneNumberAlertMax')
    .required('phoneNumberAlertRequired'),
});

export const productValidationSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .min(2, 'productNameAlertMin')
    .max(50, 'productNameAlertMax')
    .required('productNameAlertRequired'),
  description: yup
    .string()
    .trim()
    .min(2, 'descriptionAlertMin')
    .max(50, 'descriptionAlertMax')
    .required('descriptionAlertRequired'),
  base_price: yup
    .number()
    .typeError('priceAlertNumber')
    .required('priceAlertRequired'),
  category_ids: yup
    .array()
    .min(1, 'categoryAlertMin')
    .required('categoryAlertRequired'),
  location: yup
    .string()
    .trim()
    .required(),
  image: yup.object().shape({
    height: yup.string().required('photoProductRequired'),
    width: yup.string().required('photoProductRequired'),
    type: yup.string().required('photoProductRequired'),
    fileName: yup.string().required('photoProductRequired'),
    fileSize: yup.string().required('photoProductRequired'),
    uri: yup.string().required('photoProductRequired'),
  }),
});

export const bidPriceSchema = yup.object().shape({
  bid_price: yup
    .number()
    .required('bidPriceAlertRequired'),
});

export const changePasswordSchema = yup.object().shape({
  current_password: yup
    .string()
    .trim()
    // .min(8, 'passwordAlertMin')
    // .matches(
    //   /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
    //   'passwordAlertMatch',
    // )
    .required('passwordAlertRequired'),
  new_password: yup
    .string()
    .trim()
    // .min(8, 'passwordAlertMin')
    // .matches(
    //   /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
    //   'passwordAlertMatch',
    // )
    .required('passwordAlertRequired'),
  confirm_password: yup
    .string()
    .trim()
    .oneOf([yup.ref('new_password'), null], 'passwordConfirmAlert')
    // .min(8, 'passwordAlertMin')
    // .matches(
    //   /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
    //   'passwordAlertMatch',
    // )
    .required('passwordAlertRequired'),

});
