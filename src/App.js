import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Router from './router'
import { Provider, useSelector } from 'react-redux'
import store from './reducers' 
import { Loading } from './components'
import FlashMessage from "react-native-flash-message";


const MainApp = () => {
  const selector = useSelector(state => state)
  console.disableYellowBox = true;
  return (
    <>
      <NavigationContainer>
        <Router/>
      </NavigationContainer>
      <FlashMessage position='bottom'/>
      { selector.Loading == true ? <Loading/> : null }
    </>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <MainApp/>
    </Provider>
  )
}

export default App

