import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native'
import React from 'react'

const ModalCustomize = ({ modal, deleteItem, cancelModal, itemSelected }) => {
  return (
    <Modal visible={modal} animationType='slide' transparent={true}>
        <View>
          <View>
            <Text>
            Desea eliminar:
            </Text>
          </View>
          <View>
            <Text>
              {itemSelected.value}
            </Text>
          </View>
          <View>
            <TouchableOpacity
            onPress={deleteItem}
            >
              <Text>
                Borrar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={cancelModal}
            >
              <Text>
                Cancelar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
  )
}

export default ModalCustomize

const styles = StyleSheet.create({})