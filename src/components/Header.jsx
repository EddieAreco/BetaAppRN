import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SwitchCustom from './SwitchCustom';
import { setDarkMode } from '../features/Global/globalSlice';

const Header = ({ route }) => {

  const dispatch = useDispatch()

  const [isEnabled, setIsEnabled] = useState(false);

  const categorySelected = useSelector(state => state.shop.value.categorySelected)

  const idSelected = useSelector(state => state.shop.value.itemProductSelected)

  const { height, width } = useWindowDimensions()

  const handleTheme = () => {
    setIsEnabled(initialValue => !initialValue)
    dispatch(setDarkMode(!isEnabled))
  }

  console.log('route en Header', route.name)

  return (
    <View style={styles.container}>

      <SwitchCustom
        isEnabled={isEnabled}
        setIsEnabled={handleTheme}
      />

      {categorySelected ?
        <Text style={width > 500 ? styles.header : styles.header2}>{categorySelected}</Text>
        :
        <Text style={width > 500 ? styles.header : styles.header2}>{idSelected}</Text>

      }

    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    marginTop: 25,
    textAlign: 'center',
    fontFamily: 'Titilium'
  },
  header2: {
    fontSize: 30,
    marginTop: 25,
    textAlign: 'center',
    fontFamily: 'Matemasie'
  },
})