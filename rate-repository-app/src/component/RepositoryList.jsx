import React from 'react'
import { Text, FlatList } from 'react-native'
import RepositoryItem from './RepositoryItem.jsx'
import UseRepositories from '../customHook/useRepositories.js'

const ResposList = () => {
  const { repositories } = UseRepositories()

  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item }) => {
        return <RepositoryItem repo={item} />
      }}
    />
  )
}

export default ResposList
