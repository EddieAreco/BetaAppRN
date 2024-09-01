import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = ({ title }) => {
  return (
    <View>
      <Text style={styles.header}>{title}</Text>
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
  })