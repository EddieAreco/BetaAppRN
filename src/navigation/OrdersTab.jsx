import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import OrdersScreen from '../screens/OrdersScreen'

const Stack = createNativeStackNavigator()

const OrdersTab = () => {
  return (
    <Stack.Navigator 
    initialRouteName='OrdersScreen'
    screenOptions={{ headerShown: false }}
    >

      <Stack.Screen name="OrdersScreen" component={OrdersScreen} />

    </Stack.Navigator>
  )
}

export default OrdersTab

const styles = StyleSheet.create({})