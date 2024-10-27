import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import ProductItem from '../components/ProductItem'
import { useSelector } from 'react-redux'
import { usePostOrderMutation } from '../services/shopService'

const CartScreen = () => {

  const { items, total } = useSelector(state => state.cart.value)

  const {user} = useSelector(state => state.auth.value)

  const [triggerPost, result] = usePostOrderMutation()

  const confirmOrder = () => {
    triggerPost({ 
      total,
      items,
      user: user,
      createdDate: new Date().toLocaleString(),
    })
  }

  console.log('result', result)

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item }) =>
          <View>
            <ProductItem product={item} />
            <Text>Quantity: {item.quantity}</Text>
          </View>
        }
        keyExtractor={item => item.id}
        style={styles.flatList}
      />

      <Button onPress={confirmOrder} title='Confirmar pedido' />
      <Text style={{ fontSize: 20, color: 'white' }}>Total: {total}</Text>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: 'blue',
  },
  flatList: {
    marginVertical: 10,
    marginHorizontal: 10,
    height: '90%',
  },
})