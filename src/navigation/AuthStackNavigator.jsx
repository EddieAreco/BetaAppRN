import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import LoginScreen from '../screens/LoginScreen'
import SignUpScreen from '../screens/SignUpScreen'

const Stack = createNativeStackNavigator()
const AuthStackNavigator = () => {
    return (
        <View style={styles.container}>

                <Stack.Navigator
                initialRouteName='SignUpScreen'
                screenOptions={{ headerShown: false }}
                >

                    <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />

                    <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }}/>

                </Stack.Navigator>
        </View>
    )
}

export default AuthStackNavigator

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: 'red',
    }
})