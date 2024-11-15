import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import ProductItem from '../components/ProductItem'
import Search from '../components/Search'
import { useGetProductsByCategoryQuery } from '../services/shopService'

const ListCategories = ({
    setCategorySelected = () => { },
    navigation,
    route,
}) => {

    const [keyword, setKeyword] = useState('')
    const [productsFiltered, setProductsFiltered] = useState([])
    const [errorSearch, setErrorSearch] = useState('')

    const {categories: categorySelected} = route.params
    
    const { data: products, isLoading, error } = useGetProductsByCategoryQuery(categorySelected)

    useEffect(() => {

        regex = /\d/
        const digit = (regex.test(keyword))

        if (digit) {
            setErrorSearch('No se permiten digitos')
            return
        }

        if (!isLoading){

            const productsFilter = products.filter(product => product.title.toLowerCase().includes(keyword.toLowerCase()))

            setProductsFiltered(productsFilter.sort((a, b) => a.title.localeCompare(b.title)))
    
            setErrorSearch('')
            
        }

    }, [keyword, categorySelected, products, isLoading])

    return (
        <View>

            <Search
                searchProduct={setKeyword}
                goBack={() => navigation.goBack()}
                error={errorSearch}
            />

            <FlatList
                data={productsFiltered}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) =>
                    <ProductItem
                        navigation={navigation}
                        product={item}
                    />
                }
            />

        </View>
    )
}

export default ListCategories

const styles = StyleSheet.create({})