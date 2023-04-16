import React from 'react'
import { View } from 'react-native'
import StyledText from './StyleText'

const parseThousands = value => {
  return value > 1000
    ? `${Math.round(value / 100) / 10}k`
    : String(value)
}

export default function RepositoryStats ({ repo }) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <View>
        <StyledText aling='center'>{parseThousands(repo.stargazersCount)}</StyledText>
        <StyledText aling='center' fontWeight='bold'>Stars</StyledText>
      </View>
      <View>
        <StyledText aling='center'>{parseThousands(repo.forksCount)}</StyledText>
        <StyledText aling='center' fontWeight='bold'>Fork</StyledText>
      </View>
      <View>
        <StyledText aling='center'>{repo.ratingAverage}</StyledText>
        <StyledText aling='center' fontWeight='bold'>Rating</StyledText>
      </View>
      <View>
        <StyledText aling='center'>{repo.reviewCount}</StyledText>
        <StyledText aling='center' fontWeight='bold'>Review</StyledText>
      </View>
    </View>
  )
}
