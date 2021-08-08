import React from 'react'
import {Contacts, ContactAdd } from '../pages'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

const Router = () => {
    return (
       <Stack.Navigator initialRouteName='Contacts' screenOptions={{headerShown:false}} >
           <Stack.Screen name='Contacts' component={Contacts}/>
           <Stack.Screen name='ContactAdd' component={ContactAdd}/>
       </Stack.Navigator>
    )
}

export default Router

