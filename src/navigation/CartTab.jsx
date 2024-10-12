import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CartScreen from '../screens/CartScreen'

const Stack = createNativeStackNavigator()

const CartTab = () => {
  return (
    
    <Stack.Navigator 
    initialRouteName='CartScreen'
    screenOptions={{ headerShown: false }}
    >

      <Stack.Screen name="CartScreen" component={CartScreen} />

    </Stack.Navigator>
  )
}

export default CartTab

const styles = StyleSheet.create({})