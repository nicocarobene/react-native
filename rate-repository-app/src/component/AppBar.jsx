import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import StyledText from './StyleText'
import Constants from 'expo-constants'
import theme from '../theme'
import { Link, useLocation } from 'react-router-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,

    paddingLeft: 10,
    flexDirection: 'row'
  },
  scroll: {
    paddingBottom: 15
  },
  text: {
    color: theme.appBar.textSecondary,
    paddingHorizontal: 10
  },
  active: {
    color: theme.appBar.textPrimary
  }
})

const AppBarTab = ({ children, to }) => {
  const { pathname } = useLocation()
  const active = pathname === to

  const textStyle = [
    styles.text,
    active && styles.active
  ]
  return (
    <Link to={to}>
      <StyledText fontWeight='bold' style={textStyle}>
        {children}
      </StyledText>
    </Link>
  )
}
export default function AppBar () {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        <AppBarTab to='/'>Repositories</AppBarTab>
        <AppBarTab to='/singin'>SingIn</AppBarTab>
      </ScrollView>
    </View>

  )
}
