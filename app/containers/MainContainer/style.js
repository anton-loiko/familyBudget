import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: '#F0F3F5',
    justifyContent: 'space-between',
  },
  footer: {
    position: 'relative',
    height: '10%',
    borderStyle: 'solid',
    borderColor: 'rgba(180, 180, 180, .5)',
    borderTopWidth: 0.4,
    zIndex: 101,
  },
  main: {
    position: 'relative',
    height: '90%',
    zIndex: 100,
  },
})
