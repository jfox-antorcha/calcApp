import React, { useState, useEffect} from "react"
import { useColorScheme, ColorSchemeName } from "react-native";

import { ThemeColors } from "../constants/interfaces"


const darkColors: ThemeColors = {
  backgroud: 'black',
  foreground: 'white',
  primary: '#EE6002',
  secondary: '#2D2D2D',
  border: '#9B9B9B',
  card: '#9B9B9B',
  success: 'green',
  alert: 'red'
}

const lightColors: ThemeColors = {
  backgroud: 'white',
  foreground: 'black',
  primary: '#EE6002',
  secondary: '#BDC4F2',
  border: '#909de5',
  card: '#909de5',
  success: 'green',
  alert: 'red'
}

const ColorsScheme = () => {
  const scheme: ColorSchemeName = useColorScheme()
  const [colorScheme, setColorScheme] = useState<ThemeColors>(lightColors)

  useEffect(() => {
    ( scheme === 'dark')
      ? setColorScheme(darkColors)
      : setColorScheme(lightColors)
  },[])

  return colorScheme
}

export default ColorsScheme;