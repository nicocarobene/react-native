import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#999',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10
  },
  error: {
    borderColor: 'red'
  }
})

const StyleTextInput = ({ style = {}, error, ...props }) => {
  const inputStyle = [
    styles.textInput,
    styles,
    error && styles.error
  ]
  return (
    <TextInput style={inputStyle} {...props} />
  )
}

export default StyleTextInput
