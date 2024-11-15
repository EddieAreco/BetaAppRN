import { StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SwitchCustom from './SwitchCustom';
import { setDarkMode } from '../features/Global/globalSlice';
import AntDesign from '@expo/vector-icons/AntDesign';


const Header = ({ route, goBack }) => {

  const dispatch = useDispatch()

  const [isEnabled, setIsEnabled] = useState(false);

  const categorySelected = useSelector(state => state.shop.value.categorySelected)

  const idSelected = useSelector(state => state.shop.value.itemProductSelected)

  const { height, width } = useWindowDimensions()

  const handleTheme = () => {
    setIsEnabled(initialValue => !initialValue)
    dispatch(setDarkMode(!isEnabled))
  }

  return (
    <View style={styles.container}>

      <SwitchCustom
        isEnabled={isEnabled}
        setIsEnabled={handleTheme}
      />

      <TouchableOpacity
        onPress={goBack}
      >
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>

      <Text style={width > 500 ? styles.header : styles.header2}>{route}</Text>

      {/* {categorySelected ?
        <Text style={width > 500 ? styles.header : styles.header2}>{categorySelected}</Text>
        :
        <Text style={width > 500 ? styles.header : styles.header2}>{idSelected}</Text>

      } */}

    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Titilium'
  },
  header2: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Matemasie'
  },
})