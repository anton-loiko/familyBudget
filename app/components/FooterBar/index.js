import React from 'react'
import { Alert, View } from 'react-native'
import AddButton from '../AddButton'
import TabIcon from '../TabIcon'
import Icon1 from '../../../assets/images/1-24.png'
import Icon2 from '../../../assets/images/2-24.png'
import Icon3 from '../../../assets/images/3-24.png'
import Icon4 from '../../../assets/images/4-24.png'

import { styles } from './style'

const addButtonFirstHandle = () => Alert.alert('FirstHandle')
const addButtonSecondHandle = () => Alert.alert('SecondHandle')

export default ({ navigation }) => {
  console.log('====================================')
  console.log(navigation)
  console.log('====================================')

  const allMonthsHandle = () => navigation.navigate('AllMonths')
  const lastMonthsHandle = () => navigation.navigate('LastMonths')
  const prevWeekHandle = () => navigation.navigate('PrevWeek')
  const currentWeekHandle = () => navigation.navigate('Home')
  return (
    <View style={styles.wrap}>
      <View style={styles.wrapIcons}>
        <TabIcon icon={Icon1} onPress={allMonthsHandle} />
        <TabIcon icon={Icon2} onPress={lastMonthsHandle} />
      </View>
      <View style={styles.wrapBtn}>
        <AddButton
          onFirstPress={addButtonFirstHandle}
          onSecondPress={addButtonSecondHandle}
        />
      </View>
      <View style={styles.wrapIcons}>
        <TabIcon icon={Icon3} onPress={prevWeekHandle} />
        <TabIcon icon={Icon4} onPress={currentWeekHandle} />
      </View>
    </View>
  )
}
