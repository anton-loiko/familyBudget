/**
 * @format
 */

import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import CurrentWeekScreen from './screens/CurrentWeek'
import LastMonthsScreen from './screens/LastMonths'
import PrevWeekScreen from './screens/PrevWeek'
import AllMonthsScreen from './screens/AllMonths'

const baseNavOptions = title => ({
  navigationOptions: () => ({
    title,
  }),
})

const RootStack = createStackNavigator(
  {
    Home: {
      screen: CurrentWeekScreen,
      ...baseNavOptions('Current Week'),
    },

    AllMonths: {
      screen: AllMonthsScreen,
      ...baseNavOptions('All Months'),
    },
    LastMonths: {
      screen: LastMonthsScreen,
      ...baseNavOptions('Last Months'),
    },
    PrevWeek: {
      screen: PrevWeekScreen,
      ...baseNavOptions('Prev Week'),
    },
  },
  {
    initialRouteName: 'Home',
  }
)

const AppContainer = createAppContainer(RootStack)

export default () => {
  return <AppContainer />
}
