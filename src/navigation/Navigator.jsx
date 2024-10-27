import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeStackNavigator from './HomeStackNavigator'
import BottomTabNavigator from './BottomTabNavigator'
import SignUpScreen from '../screens/SignUpScreen'
import LoginScreen from '../screens/LoginScreen'
import { useSelector } from 'react-redux'
import AuthStackNavigator from './AuthStackNavigator'

const Navigator = () => {

    const {user} = useSelector(state => state.auth.value)

    return (
        <View style={styles.container}>

            <NavigationContainer>

                {user ? 
                <BottomTabNavigator /> 
                : 
                <AuthStackNavigator />}

            </NavigationContainer>

        </View>
    )
}

export default Navigator

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    }
})