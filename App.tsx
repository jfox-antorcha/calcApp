import React from 'react'
import { SafeAreaView } from 'react-native'

import GlobalStyles from './src/styles/GlobalStyles'
import HomeScreen from './src/screeens/HomeScreen'

const App = () => {
  const globalStyles = GlobalStyles()

  return (
    <SafeAreaView style={globalStyles.appContainer}>
      <HomeScreen />
    </SafeAreaView>
  )
}

export default App