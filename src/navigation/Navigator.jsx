import { StyleSheet, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeStackNavigator from './HomeStackNavigator'
import BottomTabNavigator from './BottomTabNavigator'

const Navigator = () => {
    return (
        <View style={styles.container}>

            <NavigationContainer>

                <BottomTabNavigator />
                {/* <HomeStackNavigator /> */}

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