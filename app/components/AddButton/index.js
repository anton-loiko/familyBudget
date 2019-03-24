import React, { useState, useEffect } from 'react'
import { Alert, TouchableWithoutFeedback, View, Animated } from 'react-native'
import { styles, BTN_SIZE } from './style'

export default () => {
  const [isOpen, setOpen] = useState(false)

  let clickTimeout

  useEffect(() => {
    return clearTimeout(clickTimeout)
  }, [])

  const top = new Animated.Value(-(BTN_SIZE / 2))
  const rotateValue = new Animated.Value(0)

  const interpolateRotation = rotateValue.interpolate({
    inputRange: [0, 1, 2, 3],
    outputRange: ['0deg', '225deg', '180deg', '90deg'],
  })

  const animatedStyle = {
    transform: [{ rotate: interpolateRotation }],
  }

  const startAnimation = () => {
    if (isOpen) {
      const duration = 1200
      top.setValue(10)
      Animated.timing(top, {
        toValue: -(BTN_SIZE * 1.5),
        friction: 0.8,
      }).start()

      setTimeout(() => {
        Animated.parallel([
          Animated.timing(top, {
            toValue: -(BTN_SIZE / 2),
            friction: 0.5,
          }),
          Animated.timing(rotateValue, {
            toValue: 3,
            duration: 500,
          }),
        ]).start()
      }, 500)

      Animated.timing(rotateValue, {
        toValue: 2,
        duration,
      }).start()

      setTimeout(() => {
        setOpen(false)
      }, 1000)
    }

    if (!isOpen) {
      const duration = 500

      Animated.timing(top, { toValue: 10, friction: 0.8 }).start()
      Animated.timing(rotateValue, {
        toValue: 1,
        duration,
      }).start()

      clickTimeout = setTimeout(() => {
        setOpen(true)
      }, duration)
    }
  }

  return (
    <TouchableWithoutFeedback
      onPress={startAnimation}
      accessibilityLabel="Add new note"
      style={{ position: 'absolute', width: BTN_SIZE, height: BTN_SIZE }}
    >
      <Animated.View style={[styles.button, { top }, animatedStyle]}>
        <View style={styles.btnX} />
        <View style={styles.btnY} />
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}
