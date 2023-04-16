import * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required('Email is required'),
  name: yup
    .string()
    .min(2, 'Too Short')
    .max(10, 'Too Long')
    .required(),
  password: yup
    .string()
    .min(5, 'Too Short')
    .max(1000, 'Too long')
    .required('Password is required')
})
