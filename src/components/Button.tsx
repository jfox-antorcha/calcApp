import React, { useMemo } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import ColorsScheme from '../styles/ColorsScheme'

import { ThemeColors, ButtonProps } from '../constants/interfaces'

const Button = ({ value, color = '#2D2D2D', wide = false, action }:ButtonProps) => {
  const colors: ThemeColors = ColorsScheme()
  const styles = useMemo(() => createStyles(colors, wide), [colors, wide])

  return (
    <TouchableOpacity onPress={() => action(value) }>
      <View style={[styles.buttonContainer, {backgroundColor: color}]}>
        <Text style={styles.buttonText}>{value}</Text>
      </View>
    </TouchableOpacity>
  )
}
const createStyles = (colors: ThemeColors, wide: Boolean) => StyleSheet.create({
  buttonContainer: {
    height: 70,
    width: ( wide ) ? 160 : 70,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10
  },
  buttonText: {
    fontSize: 25,
    fontWeight: '700',
    color: colors.foreground
  }
})

export default Button