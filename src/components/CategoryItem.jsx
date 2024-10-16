import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import { setCategorySelected } from '../features/Shop/shopSlice'

const CategoryItem = ({
  categories,
  navigation,
}) => {

  const dispatch = useDispatch()

  const handleNavigate = () => {
    dispatch(setCategorySelected(categories))
    navigation.navigate('ListCategories', {categories})
  }

  return (
    <Card>

      <TouchableOpacity
        onPress={handleNavigate}
      >

        <Text style={styles.text}>{categories}</Text>

      </TouchableOpacity>
    </Card>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Handjet-Regular'
  }
})