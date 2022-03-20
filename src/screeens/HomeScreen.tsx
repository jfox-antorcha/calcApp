import React, { useRef, useState } from 'react'
import { View, Text  } from 'react-native'

import Button from '../components/Button'
import Digits from '../components/Digits'

import GlobalStyles from '../styles/GlobalStyles'
import ColorsScheme from '../styles/ColorsScheme'

import useCalc from '../Hooks/useCalc'

const HomeScreen = () => {
  const globalStyles = GlobalStyles()
  const colors = ColorsScheme()
  const { 
    input, 
    lastResult, 
    onPressChangePosNeg, 
    onPressDivide, 
    onPressMultiply, 
    onPressResetInput,
    onPressEqual,
    onPressRest,
    onPressSum,
    buildInput,
    onPressPercentage,
    operator
  } = useCalc()

  return (
    <View style={globalStyles.calcContainer}>
      <Digits 
        input={input} 
        lastResult={lastResult}
        operator={operator}
      />
 
      <View style={globalStyles.rowContainer}>
        <Button value='C' color={colors.card} action={onPressResetInput}/>
        <Button value='+/-' color={colors.card} action={onPressChangePosNeg}/>
        <Button value='%' color={colors.card} action={onPressPercentage}/>
        <Button value='÷' color={colors.primary} action={onPressDivide}/>
      </View>

      <View style={globalStyles.rowContainer}>
        <Button value='7' color={colors.secondary} action={buildInput}/>
        <Button value='8' color={colors.secondary} action={buildInput}/>
        <Button value='9' color={colors.secondary} action={buildInput}/>
        <Button value='X' color={colors.primary} action={onPressMultiply}/>
      </View>

      <View style={globalStyles.rowContainer}>
        <Button value='4' color={colors.secondary} action={buildInput}/>
        <Button value='5' color={colors.secondary} action={buildInput}/>
        <Button value='6' color={colors.secondary} action={buildInput}/>
        <Button value='-' color={colors.primary} action={onPressRest}/>
      </View>

      <View style={globalStyles.rowContainer}>
        <Button value='1' color={colors.secondary} action={buildInput}/>
        <Button value='2' color={colors.secondary} action={buildInput}/>
        <Button value='3' color={colors.secondary} action={buildInput}/>
        <Button value='+' color={colors.primary} action={onPressSum}/>
      </View>

      <View style={globalStyles.rowContainer}>
        <Button value='0' color={colors.secondary} action={buildInput} wide/>
        <Button value='.' color={colors.secondary} action={buildInput}/>
        <Button value='=' color={colors.primary} action={onPressEqual}/>
      </View>
    </View>
  )
}

export default HomeScreen