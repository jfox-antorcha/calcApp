import React, { useMemo } from "react";
import { StyleSheet } from "react-native";

import { ThemeColors } from "../constants/interfaces";
import ColorsScheme from "./ColorsScheme";


const GlobalStyles = () => {
  const colorScheme:ThemeColors = ColorsScheme() 

  const styles = useMemo(() => createStyles(colorScheme), [colorScheme])

  return styles
}

const createStyles = (colorScheme: ThemeColors) => StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: colorScheme.backgroud,
    paddingHorizontal: 10,
  },
  calcContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  calcInput: {
    color: colorScheme.foreground,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'right',
    marginHorizontal: 20,
  },
  calcLastResult: {
    color: colorScheme.card,
    fontSize: 30,
    textAlign: 'right',
    marginHorizontal: 20,
  },
  inputRow: {
    flex: 20,
  },
  operatorRow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  operatorText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
})

export default GlobalStyles;