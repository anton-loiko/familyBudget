import { StyleSheet } from 'react-native'
import { BTN_SIZE } from '../AddButton/style'

export const styles = StyleSheet.create({
  wrap: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  wrapBtn: {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: [{ translateX: -(BTN_SIZE / 2) }],
    zIndex: 50,
    width: BTN_SIZE,
    height: BTN_SIZE,
  },
  wrapIcons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
})
