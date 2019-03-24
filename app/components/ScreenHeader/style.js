import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  header: {
    position: 'relative',
    flex: 0,
    flexDirection: 'row',
    width: '100%',
    height: 35,
    borderStyle: 'solid',
    borderColor: 'rgba(180, 180, 180, .5)',
    borderBottomWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: '#262626',
  },
  btn: {
    position: 'absolute',
    left: 15,
  },
})
