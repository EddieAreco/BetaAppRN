import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'

const Header = ({ title }) => {

  const {height, width} = useWindowDimensions()

  return (
    <View>
      <Text style={width > 500 ? styles.header : styles.header2 }>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        marginTop: 25,
        textAlign: 'center',
        fontFamily: 'Titilium'
    },
    header2: {
        fontSize: 30,
        marginTop: 25,
        textAlign: 'center',
        fontFamily: 'Matemasie'
    },
  })