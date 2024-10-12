import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import SwitchCustom from './SwitchCustom';



const Header = ({ route }) => {

  const [isEnabled, setIsEnabled] = useState(false);

  const categorySelected = useSelector(state => state.shop.value.categorySelected)

  const idSelected = useSelector(state => state.shop.value.itemProductSelected)

  const {height, width} = useWindowDimensions()

  return (
    <View style={styles.container}>

      <SwitchCustom isEnabled={isEnabled} setIsEnabled={setIsEnabled}/>

      <Text style={width > 500 ? styles.header : styles.header2 }>{categorySelected  }</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
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