import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { scale } from '../utils/utils'

const CloseButton = ({closeHandler}) => {
  return (
    <Pressable 
    style={{margin:scale(10)}}
    onPress={closeHandler}>
      <Text>Close</Text>
    </Pressable>
  )
}

export default CloseButton