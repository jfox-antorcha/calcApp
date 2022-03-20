import React from 'react'
import { View, Text } from 'react-native'

import GlobalStyles from '../styles/GlobalStyles';
import { DigitsProps } from '../constants/interfaces';

const Digits = ({ input, lastResult, operator }: DigitsProps) => {
  const globalStyles = GlobalStyles()
  
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={globalStyles.inputRow}>
        { (lastResult !== '0') && <Text style={globalStyles.calcLastResult}>{lastResult}</Text>}
        <Text style={globalStyles.calcInput} numberOfLines={1} adjustsFontSizeToFit >{input}</Text>
      </View>
      <View style={globalStyles.operatorRow}>
        <Text style={globalStyles.operatorText}>{operator}</Text>
      </View>
    </View>
  )
}

export default Digits