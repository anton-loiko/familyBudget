/**
 * @format
 */

import React from 'react'
import { StyleSheet, View } from 'react-native'

import FooterBar from './components/FooterBar'
import AllMonths from './screens/AllMonths'

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <AllMonths />
      </View>

      <View style={styles.footer}>
        <FooterBar />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: '#F0F3F5',
    justifyContent: 'space-between',
  },
  footer: {
    height: '10%',
  },
  main: {
    height: '90%',
  },
})
