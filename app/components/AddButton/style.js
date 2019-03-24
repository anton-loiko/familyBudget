import { StyleSheet } from 'react-native'

export const BTN_SIZE = 44

const button = {
  position: 'absolute',
  top: -(BTN_SIZE / 2),
  borderRadius: BTN_SIZE / 2,
  shadowColor: 'rgba(180, 180, 180, 0.3)',
  backgroundColor: '#F25175',
  width: BTN_SIZE,
  height: BTN_SIZE,
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 104,
}

const btnXY = {
  position: 'absolute',
  zIndex: -1,
  backgroundColor: '#FFF',
}

export const styles = StyleSheet.create({
  button,

  btnX: {
    ...btnXY,
    height: 1,
    width: BTN_SIZE / 2,
  },
  btnY: {
    ...btnXY,
    width: 1,
    height: BTN_SIZE / 2,
  },
})
