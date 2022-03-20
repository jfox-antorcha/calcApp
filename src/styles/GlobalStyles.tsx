import React, { useState, useEffect, useMemo } from "react";
import { StyleSheet, useColorScheme, ColorSchemeName } from "react-native";

interface ThemeColors {
  backgroud: string;
  foreground: string;
  primary: string;
  secondary: string;
  border: string;
  card: string;
  success: string;
  alert: string;
}

const darkColors: ThemeColors = {
  backgroud: 'black',
  foreground: 'white',
  primary: 'cyan',
  secondary: 'yellow',
  border: 'gray',
  card: 'gray',
  success: 'green',
  alert: 'red'
}

const lightColors: ThemeColors = {
  backgroud: 'white',
  foreground: 'black',
  primary: 'blue',
  secondary: 'orange',
  border: 'gray',
  card: 'gray',
  success: 'green',
  alert: 'red'
}

const GlobalStyles = () => {
  const theme: ColorSchemeName = useColorScheme()
  const [themeColors, setthemeColors] = useState<ThemeColors>(lightColors)

  useEffect(() => {
    (theme === 'dark')
      ? setthemeColors(darkColors)
      : setthemeColors(lightColors)
  }, [])
  

  const styles = useMemo(() => createStyles(themeColors), [themeColors])

  return styles
}

const createStyles = (themeColors: ThemeColors) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.backgroud,
  },
  heading_1: {
    color: themeColors.foreground,
    fontSize: 30,
    fontWeight: 'bold'
  }
})

export default GlobalStyles;