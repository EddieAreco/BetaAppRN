import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import products from '../data/products.json'

const ItemDetail = ({ setProductSelected, route, navigation }) => {

    const [product, setProduct] = useState(null)
    const [productTitle, setProductTitle] = useState(null)

    const {productId: idSelected, productTitle: titleSelected} = route.params
    
    console.log('route en ItemDetail', route)

    useEffect(() => {

        const findProduct = products.find(product => product.id == idSelected)
        const findProductForTitle = products.find(product => product.title == titleSelected)
        // VER ESTA LINEA DE CODIGO DE ARRIBA YA QUE NO ESTA TOMANDO EL NOMBRE

        setProduct(findProduct)
        setProductTitle(findProductForTitle)
    }, [idSelected, titleSelected])

    return (
        <View>

            <Button title="Volver" onPress={() => navigation.goBack()} />

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