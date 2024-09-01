import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = ({ children, style }) => {
  return (
    <View style={{...styles.container, ...style}}> 
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      borderRadius: 5,
      marginVertical: 5,
      marginHorizontal: 10,
      padding: 5,
      shadowColor: 'black',
      shadowOffset: {
        width: 20,
        height: 30
      },
      shadowOpacity: 0.5,
      shadowRadius: 10,
      elevation: 15
    },
  })