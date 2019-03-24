import React from 'react'
import { Text, View, TouchableHighlight, Image } from 'react-native'
import { styles } from './style'
import backIcon from '../../../assets/images/back-arrow.png'

export default ({ title, onClick }) => (
  <View style={styles.header}>
    <TouchableHighlight style={styles.btn} onPress={onClick}>
      <Image source={backIcon} />
    </TouchableHighlight>
    <Text style={styles.text}>{title}</Text>
  </View>
)
