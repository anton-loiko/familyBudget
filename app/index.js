/**
 * @format
 */

import React from 'react'
import { StyleSheet, View } from 'react-native'

import FooterBar from './components/FooterBar'
import AllMonthsScreen from './screens/AllMonths'
import AppContainer from './screens/AppContainer'

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        {/* <AllMonthsScreen  /> */}
        <AppContainer />
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
    borderStyle: 'solid',
    borderColor: 'rgba(180, 180, 180, .5)',
    borderTopWidth: 0.4,
  },
  main: {
    height: '90%',
  },
})
