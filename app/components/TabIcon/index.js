import React from 'react'
import { View, Image, TouchableWithoutFeedback } from 'react-native'
import { styles } from './style'

export default ({ icon, onClick }) => {
  return (
    <View style={styles.icon}>
      <TouchableWithoutFeedback onPress={onClick}>
        <Image source={icon} />
      </TouchableWithoutFeedback>
    </View>
  )
}
