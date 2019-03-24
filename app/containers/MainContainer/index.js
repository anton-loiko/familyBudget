import React from 'react'
import { View } from 'react-native'
import { styles } from './style'
import FooterBar from '../../components/FooterBar'

export default ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>{children}</View>

      <View style={styles.footer}>
        <FooterBar />
      </View>
    </View>
  )
}
