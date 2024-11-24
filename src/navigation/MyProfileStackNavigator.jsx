import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header'
import MyProfile from '../screens/MyProfile'
import ImageSelector from '../screens/ImageSelector'

import LocationSelector from '../screens/LocationSelector'

const Stack = createNativeStackNavigator()

const MyProfileStackNavigator = () => {
  return (

    <Stack.Navigator
    initialRouteName='MyProfile'
    screenOptions={{ 
        headerShown: false,
     }}
    >
      <Stack.Screen name="MyProfile" component={MyProfile} />

      <Stack.Screen name="ImageSelector" component={ImageSelector} />

      {/* <Stack.Screen name="LocationSelector" component={LocationSelector} /> */}

    </Stack.Navigator>
  )
}

export default MyProfileStackNavigator

const styles = StyleSheet.create({})