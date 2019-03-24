import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { styles } from './style'

export default ({ icon, onPress }) => {
  return (
    <View style={styles.icon}>
      <TouchableOpacity onPress={onPress}>
        <Image source={icon} />
      </TouchableOpacity>
    </View>
  )
}
