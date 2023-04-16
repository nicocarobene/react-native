import React from 'react'
import StyledText from './StyleText'
import { Image, View } from 'react-native'
import { styles } from './RepositoryItem'

export default function RepositoryItemHeader ({ repo }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={{ justifyContent: 'center' }}>
        <Image
          style={styles.image} source={{ uri: repo.ownerAvatarUrl }}
        />
      </View>
      <View style={{ flex: 1, paddingLeft: 10 }}>
        <StyledText fontWeight='bold'>{repo.fullName}</StyledText>
        <StyledText color='secondary'>{repo.description}</StyledText>
        <StyledText style={styles.language}>{repo.language}</StyledText>
      </View>
    </View>
  )
}
