import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import Card from './Card'
import { useDispatch } from 'react-redux'
import { setProductSelected } from '../features/Shop/shopSlice'

const ProductItem = ({ 
  product, 
  navigation, 
}) => {

  const dispatch = useDispatch()

  const handleNavigate = () => {

    dispatch(setProductSelected(product.title))
    navigation.navigate('ItemDetail', {productId: product.id, productTitle: product.title})
  }

  return (
    <Card
    style={styles.container}
    >
      <TouchableOpacity 
      style={styles.touchable}
      onPress={ handleNavigate }
      >

      <Text style={styles.text}>{product.title}</Text>

      <Image
      resizeMode='cover'
      source={{ uri: product.images[1] }}
      style={{ width: '30%', height: 100, borderWidth: 2, borderColor: 'black' }}
      // onError={(error) => console.log('Error cargando la imagen:', error)}
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