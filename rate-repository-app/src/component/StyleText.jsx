import React from 'react'
import { Text, StyleSheet } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSize.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeight.normal
  },
  colorPrimary: {
    color: theme.colors.textPrimary
  },
  colorSecondary: {
    color: theme.colors.textSecondary
  },
  bold: {
    fontWeight: theme.fontWeight.bold
  },
  subheading: {
    fontSize: theme.fontSize.subheading
  },
  center: {
    textAlign: 'center'
  }
})

export default function StyledText ({ children, error, aling, color, fontSize, fontWeight, style, ...restofProps }) {
  const textStyles = [
    styles.text,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    fontSize === 'subheading' && styles.bold,
    fontWeight === 'bold' && styles.bold,
    aling === 'center' && styles.center,
    style
  ]
  return (
    <Text style={textStyles} {...restofProps}>
      {children}
    </Text>
  )
}
