import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const ShopLayout = ({ children }) => {

    const darkMode = useSelector(state => state.global.darkMode)

    const backgroundColor = darkMode ? 'black' : 'white'

    return (
        <View style={{...styles.container, backgroundColor}}>
            {children}
        </View>
    )
}

export default ShopLayout

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
    },
})