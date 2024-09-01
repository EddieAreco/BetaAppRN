import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Card from './Card'

const CategoryItem = ({
  categories,
  selectCategory = () => { }
}) => {

  return (
    <Card>

      <TouchableOpacity
        onPress={() => selectCategory(categories)}
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