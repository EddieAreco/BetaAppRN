import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import { useGetProductsByIdQuery } from '../services/shopService'
import { useDispatch } from 'react-redux'
import { addItem } from '../features/Cart/cartSlice'

const ItemDetail = ({ setProductSelected, route, navigation }) => {

    const dispatch = useDispatch()

    const { productId: idSelected, productTitle: titleSelected } = route.params
    //ESTOS PARAMETROS, SON DEFINIDOS EN NAVIGATION.NAVIGATE EN ProductItem.jsx

    const { data: product, isLoading, error } = useGetProductsByIdQuery(idSelected)

    const handAddCart = () => {
        dispatch(addItem({ ...product, quantity: 1 }))
    }

    console.log('route en ItemDetail', route)

    return (
        <View>

            <Button title="Volver" onPress={() => navigation.goBack()} />

            {product ?

                <View>
                    <Text>{product.title}</Text>
                    <Text>{product.price}</Text>
                    <Text>{product.description}</Text>
                    <Button title="Agregar a Carrito" onPress={handAddCart} />
                </View>
                :
                <Text>Cargando...</Text>
            }
        </View>
    )
}

export default ItemDetail

const styles = StyleSheet.create({})