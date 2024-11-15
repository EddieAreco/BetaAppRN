import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Header from '../components/Header'

import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';

import HomeStackNavigator from './HomeStackNavigator';
import CartTab from './CartTab';
import OrdersTab from './OrdersTab';
import MyProfileStackNavigator from './MyProfileStackNavigator';

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
    return (

        <Tab.Navigator

            screenOptions={
                ({ route, navigation }) => (
                    {
                        header: () => {
                            return <Header 
                            goBack={() => navigation.goBack()}
                            route={
                                route.name === 'Home' ? 'Coder Project' :
                                    route.name === 'ListCategories' ? route.params.categories :
                                        route.name === 'ItemDetail' ? route.params.productTitle : 'Coder Project'
                            } />
                        },
                        tabBarShowLabel: false,
                        tabBarStyle: styles.tabBar,

                    })}
        >

            <Tab.Screen
                name="Shop"
                component={HomeStackNavigator}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <Entypo name="shop" size={24} color={focused ? "red" : "green"} />
                            </View>
                        )
                    },
                }}
            />

            <Tab.Screen
                name="Carrito"
                component={CartTab}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <AntDesign name="shoppingcart" size={36} color={focused ? "red" : "green"} />
                            </View>
                        )
                    },
                }}
            />

            <Tab.Screen
                name="Pedidos"
                component={OrdersTab}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <FontAwesome6 name="clipboard-list" size={24} color={focused ? "red" : "green"} />
                            </View>
                        )
                    },
                }}
            />

            <Tab.Screen
                name="Mi Perfil"
                component={MyProfileStackNavigator}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <Ionicons name="person" size={24} color={focused ? "red" : "green"} />
                            </View>
                        )
                    },
                }}
            />

        </Tab.Navigator>
    )
}

export default BottomTabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: 'black',
        shadowColor: 'black',
    },
})