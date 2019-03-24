import React, { useState, useEffect } from 'react'
import { TouchableOpacity, View, Animated } from 'react-native'
import { styles, BTN_SIZE } from './style'

const toBottomValue = 8
let isDisable = 0

const funcDef = () => {}

export default ({ onFirstPress = funcDef, onSecondPress = funcDef }) => {
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      isDisable = false
    }
    if (!isOpen) {
      isDisable = false
    }
    return clearTimeouts()
  }, [isOpen])

  let animateTimeout
  let clickFirstTimeout
  let clickSecondTimeout

  const clearTimeouts = () => {
    clearTimeout(animateTimeout)
    clearTimeout(clickFirstTimeout)
    clearTimeout(clickSecondTimeout)
  }

  const top = new Animated.Value(-(BTN_SIZE / 2))
  const rotateValue = new Animated.Value(0)

  const interpolateRotation = rotateValue.interpolate({
    inputRange: [0, 1, 2, 3],
    outputRange: ['0deg', '225deg', '180deg', '90deg'],
  })

  const animatedStyle = {
    transform: [{ rotate: interpolateRotation }],
  }

  const firstAnimation = () => {
    if (isDisable) return

    const duration = 500

    Animated.timing(top, { toValue: toBottomValue, friction: 0.8 }).start()
    Animated.timing(rotateValue, {
      toValue: 1,
      duration,
    }).start()

    clickFirstTimeout = setTimeout(() => {
      onFirstPress()
      isDisable = 0
      setOpen(true)
    }, duration)
  }

  const secondAnimation = () => {
    if (isDisable) return

    const duration = 1200
    top.setValue(toBottomValue)
    Animated.timing(top, {
      toValue: -(BTN_SIZE * 1.5),
      friction: 0.8,
    }).start()

    animateTimeout = setTimeout(() => {
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

    clickSecondTimeout = setTimeout(() => {
      onSecondPress()
      isDisable = 0
      setOpen(false)
    }, 1000)
  }

  const startAnimation = async () => {
    if (isOpen) {
      secondAnimation()
      isDisable += 1
    }

    if (!isOpen) {
      firstAnimation()
      isDisable += 1
    }
  }

  return (
    <TouchableOpacity
      disabled={!!isDisable}
      onPress={startAnimation}
      accessibilityLabel="Add new note"
      style={{ position: 'absolute', width: BTN_SIZE, height: BTN_SIZE }}
    >
      <Animated.View style={[styles.button, { top }, animatedStyle]}>
        <View style={styles.btnX} />
        <View style={styles.btnY} />
      </Animated.View>
    </TouchableOpacity>
  )
}
