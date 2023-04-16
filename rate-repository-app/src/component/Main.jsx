import React from 'react'
import { View } from 'react-native'
import ResposList from './RepositoryList'
import AppBar from './AppBar'
import { Route, Routes } from 'react-router-native'
import LoginPage from '../pages/Login'

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path='/' Component={ResposList} />
        <Route path='/singin' Component={LoginPage} />
      </Routes>
    </View>
  )
}

export default Main
