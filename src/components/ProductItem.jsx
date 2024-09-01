import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Card from './Card'

const ProductItem = ({ product }) => {
  return (
    <Card
    style={styles.container}
    >
      <Text style={styles.text}>{product.title}</Text>

      <Image
      resizeMode='cover'
      source={{ uri: product.images[0] }}
      style={{ width: 100, height: 100 }}
      />
    </Card>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 3,
        height: 150,
        backgroundColor: 'green',
    },
    text: {
      fontSize: 15,
      color: 'black',
      fontFamily: 'Titilium'
    }
})