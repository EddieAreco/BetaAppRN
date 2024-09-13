import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import Card from './Card'

const ProductItem = ({ 
  product, 
  setProductSelected = () => {} ,
  setItemIdSelected = () => {}
}) => {

  return (
    <Card
    style={styles.container}
    >
      <TouchableOpacity 
      style={styles.touchable}
      onPress={ () => setItemIdSelected(product.id) }
      >

      <Text style={styles.text}>{product.title}</Text>

      <Image
      resizeMode='cover'
      source={{ uri: product.images[1] }}
      style={{ width: '30%', height: 100, borderWidth: 2, borderColor: 'black' }}
      onError={(error) => console.log('Error cargando la imagen:', error)}
      />
      </TouchableOpacity>
    </Card>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
        marginVertical: 3,
        height: 150,
        backgroundColor: 'green',
        borderWidth: 2, 
        borderColor: 'black'
    },
    touchable: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      
    },
    text: {
      fontSize: 15,
      color: 'black',
      fontFamily: 'Titilium'
    }
})