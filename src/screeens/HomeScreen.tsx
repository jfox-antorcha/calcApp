import React from 'react'
import { SafeAreaView, View, Text  } from 'react-native'
import GlobalStyles from '../styles/GlobalStyles'


const HomeScreen = () => {
  const globalStyles = GlobalStyles()

  return (
    <SafeAreaView style={globalStyles.container}>
      <Text style={globalStyles.heading_1}>HomeScreen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen