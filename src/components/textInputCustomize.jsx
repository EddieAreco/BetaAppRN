import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const TextInputCustomize = ({ handleInput, handleListItem, deleteList, textItem }) => {
  return (
    <View style={styles.container}>
        <TextInput
          onChangeText={handleInput}
          value={textItem}
          style={styles.textInput}
        />

        <TouchableOpacity
          onPress={handleListItem}
          style={styles.buttonsTextInput}
        >
          <Text style={styles.textInputTouchable}>
            Agregar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={deleteList}
          style={styles.buttonsTextInput}
        >
          <Text style={styles.textInputTouchable}>
            Borrar
          </Text>
        </TouchableOpacity>
      </View>
  )
}

export default TextInputCustomize

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "90%",
    marginVertical: 20
  },
  textInput: {
    borderWidth: 2,
    width: "80%",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonsTextInput: {
    backgroundColor: 'red',
    padding: 4,
    marginHorizontal: 3,
    borderRadius: 5,
    fontSize: 20
  },
  textInputTouchable: {
    fontSize: 14,
  }
})