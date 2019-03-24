/**
 * @format
 */

import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import CurrentWeekScreen from './screens/CurrentWeek'
import LastMonthsScreen from './screens/LastMonths'
import PrevWeekScreen from './screens/PrevWeek'
import AllMonthsScreen from './screens/AllMonths'

const RootStack = createStackNavigator(
  {
    Home: CurrentWeekScreen,
    AllMonths: AllMonthsScreen,
    LastMonths: LastMonthsScreen,
    PrevWeek: PrevWeekScreen,
  },
  {
    initialRouteName: 'Home',
  }
)

const AppContainer = createAppContainer(RootStack)

export default () => {
  return <AppContainer />
}
