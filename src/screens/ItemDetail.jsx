import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import products from '../data/products.json'

const ItemDetail = ({ idSelected, setProductSelected }) => {

    const [product, setProduct] = useState(null)

    useEffect(() => {

        const findProduct = products.find(product => product.id == idSelected)

        setProduct(findProduct)
    }, [idSelected])

    return (
        <View>

            <Button title="Volver" onPress={() => setProductSelected("")} />

            {product ?

                <View>
                    <Text>{product.title}</Text>
                    <Text>{product.price}</Text>
                    <Text>{product.description}</Text>
                    <Button title="Agregar a Carrito" onPress={() => setProductSelected("")} /> 
                </View>
                :
                <Text>Cargando...</Text>
            }
        </View>
    )
}

export default ItemDetail

const styles = StyleSheet.create({})