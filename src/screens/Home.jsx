import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import Feather from '@expo/vector-icons/Feather';

import TextInputCustomize from '../components/textInputCustomize'
import ModalCustomize from '../components/ModalCustomize'
import CategoryItem from '../components/CategoryItem'

import categories from '../data/categories.json'
import Header from '../components/Header';

const Home = ({ setCategorySelected = () => {} }) => {

    const [textItem, setTextItem] = useState("")
    const [itemList, setItemList] = useState([])
    const [itemSelected, setItemSelected] = useState({})
    const [modal, setModal] = useState(false)

    const handleInput = (e) => {
        setTextItem(e)
    }

    const handleListItem = () => {

        setItemList(
            currentValue => [
                ...currentValue,
                { id: Math.random().toString(), value: textItem, check: false }
            ])


        setTextItem("")
    }

    const handleModal = (item) => {
        setItemSelected(item)
        setModal(true)
    }

    const deleteList = () => {
        setItemList([])
    }

    const deleteItem = () => {
        const filter = itemList.filter(item => item !== itemSelected)

        setItemList(filter)
        setModal(false)
    }

    const cancelModal = () => {
        setModal(!modal)
        setItemSelected({})
    }

    const handleCheck = (i) => {
        setItemList(
            currentValue => currentValue.map(item => {
                if (item.id === i.id) {
                    return { ...item, check: !item.check }
                }
                return item
            })
        )
    }

    return (
        <View>

            <Header title="Home" />

            <TextInputCustomize
                handleInput={handleInput}
                textItem={textItem}
                handleListItem={handleListItem}
                deleteList={deleteList}
            />

            <FlatList
                style={styles.flatList}
                data={itemList}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <View
                        style={styles.containerFlatList}
                    >
                        <TouchableOpacity
                            onPress={() => handleModal(item)}
                        >
                            <Text
                                style={styles.textFlatList}
                            >
                                {item.value}
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => handleCheck(item)}
                        >
                            <Feather name={item.check ? "check-square" : "square"} size={24} color="black" />

                        </TouchableOpacity>
                    </View>
                }
            />

            <FlatList
                showsVerticalScrollIndicator={false}
                style={styles.flatList}
                data={categories.sort()}
                keyExtractor={item => item}
                renderItem={({ item }) =>
                    <CategoryItem
                        selectCategory={() => setCategorySelected(item)}
                        categories={item}
                    />
                }
            />

            <ModalCustomize
                modal={modal}
                deleteItem={deleteItem}
                cancelModal={cancelModal}
                itemSelected={itemSelected}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    containerFlatList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
        alignItems: 'center',
        marginVertical: 3,
    },
    flatList: {
        marginVertical: 10,
        height: 100,
    },
    textFlatList: {
        padding: 4,
        marginHorizontal: 3,
        backgroundColor: 'white',
        fontSize: 20,
        borderRadius: 5,
    },
})