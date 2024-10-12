import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import Home from '../screens/Home'
import ListCategories from '../screens/ListCategories'
import ItemDetail from '../screens/ItemDetail'
import Header from '../components/Header'

const Stack = createNativeStackNavigator()
const HomeStackNavigator = () => {
    return (
        <View style={styles.container}>

                <Stack.Navigator>

                    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />

                    <Stack.Screen name="ListCategories" component={ListCategories} options={{ headerShown: false }}/>

                    <Stack.Screen name="ItemDetail" component={ItemDetail} options={{ headerShown: false }}/>

                </Stack.Navigator>
        </View>
    )
}

export default HomeStackNavigator

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: 'red',
    }
})