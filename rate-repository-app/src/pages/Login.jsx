import React from 'react'
import { Button, View, StyleSheet } from 'react-native'
import { Formik, useField } from 'formik'
import StyleTextInput from '../component/StyleTextInput'
import StyledText from '../component/StyleText'
import { loginValidationSchema } from '../validatinSchema/Login'

const styles = StyleSheet.create({
  form: {
    margin: 12
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 20,
    marginTop: -5
  }
})
const initialValues = {
  email: '',
  name: '',
  password: ''
}

const FormikInputValues = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)
  console.log(meta)
  return (
    <>
      <StyleTextInput error={meta.error} {...props} value={field.value} onChangeText={value => helpers.setValue(value)} />
      {meta.error && <StyledText error style={styles.error}>{meta.error}</StyledText>}
    </>
  )
}

// const validate = values => {
//   const error = {}
//   if (!values.email) {
//     error.email = 'Email is required'
//   } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     error.email = 'Invalid email addess'
//   }
//   console.log(error)

//   return error
// }

export default function LoginPage () {
  return (
    <Formik
      // validate={validate} //este era para la const validate que hicimos en JS
      validationSchema={loginValidationSchema}
      initialValues={initialValues}
      onSubmit={values => console.log(values)}
    >
      {
            ({ handleSubmit }) => {
              return (
                <View style={styles.form}>
                  <FormikInputValues name='email' placeholder='E-mail' />
                  <FormikInputValues name='name' placeholder='name' />
                  <FormikInputValues name='password' placeholder='password' secureTextEntry />
                  <Button onPress={handleSubmit} title='Log in' />
                </View>
              )
            }
        }
    </Formik>
  )
}
