import React, { useState, useEffect } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { styles } from './style'

export default ({ icon, onPress = () => {} }) => {
  const [isDisable, setDisable] = useState(false)
  let disableTimeout

  useEffect(() => {
    return clearTimeout(disableTimeout)
  }, [])

  const handlePress = () => {
    setDisable(true)
    disableTimeout = setTimeout(() => setDisable(false), 500)

    return onPress()
  }

  return (
    <View style={styles.icon}>
      <TouchableOpacity disabled={isDisable} onPress={handlePress}>
        <Image source={icon} />
      </TouchableOpacity>
    </View>
  )
}
