import React from 'react'
import { View } from 'react-native'
import AddButton from '../AddButton'
import TabIcon from '../TabIcon'
import Icon1 from '../../../assets/images/1.png'
import Icon2 from '../../../assets/images/2.png'
import Icon3 from '../../../assets/images/3.png'
import Icon4 from '../../../assets/images/4.png'

import { styles } from './style'

export default () => {
  return (
    <View style={styles.wrap}>
      <View style={styles.wrapIcons}>
        <TabIcon icon={Icon1} />
        <TabIcon icon={Icon2} />
      </View>
      <View style={styles.wrapBtn}>
        <AddButton />
      </View>
      <View style={styles.wrapIcons}>
        <TabIcon icon={Icon3} />
        <TabIcon icon={Icon4} />
      </View>
    </View>
  )
}
