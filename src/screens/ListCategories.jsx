import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import products from '../data/products.json'
import ProductItem from '../components/ProductItem'
import Search from '../components/Search'

const ListCategories = ( { categorySelected = "" , setCategorySelected = () => {}}) => {

    const [keyword, setKeyword] = useState('')
    const [productsFiltered, setProductsFiltered] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {

        regex = /\d/
        const digit = (regex.test(keyword))

        if (digit) {
            setError('No se permiten digitos')
            return
        }

        const preFilter = categorySelected ? products.filter(product => product.category === categorySelected) : products

        const productsFilter = preFilter.filter(product => product.title.toLowerCase().includes(keyword.toLowerCase()))

        setProductsFiltered(productsFilter.sort((a, b) => a.title.localeCompare(b.title)))

        setError('')

    }, [keyword, categorySelected])

    return (
        <View>

            <Search
                searchProduct={setKeyword}
                goBack={() => setCategorySelected("")}
                error={error}
            />

            <FlatList
                data={productsFiltered}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                    <ProductItem product={item} />
                }
            />

        </View>
    )
}

export default ListCategories

const styles = StyleSheet.create({})