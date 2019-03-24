import { createStackNavigator, createAppContainer } from 'react-navigation'
import CurrentWeekScreen from '../CurrentWeek'
import LastMonthsScreen from '../LastMonths'
import LastWeekScreen from '../LastWeek'
import AllMonthsScreen from '../AllMonths'

const RootStack = createStackNavigator(
  {
    Home: CurrentWeekScreen,
    AllMonths: AllMonthsScreen,
    LastMonths: LastMonthsScreen,
    LastWeek: LastWeekScreen,
  },
  {
    initialRouteName: 'Home',
  }
)

export default createAppContainer(RootStack)
