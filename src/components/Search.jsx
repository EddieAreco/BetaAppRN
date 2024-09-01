import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import EvilIcons from '@expo/vector-icons/EvilIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

const Search = ({
    searchProduct = () => { },
    error = "",
    goBack = () => { }
}) => {

    const [keyword, setKeyword] = useState('')

    return (

        <View style={styles.container}>

            <View style={styles.container2}>

                <TouchableOpacity
                    onPress={() => goBack()}
                >
                    <AntDesign name="arrowleft" size={24} color="black" style={styles.search} />
                </TouchableOpacity>

                <TextInput
                    placeholder='Buscar'
                    value={keyword}
                    onChangeText={setKeyword}
                    style={styles.input}
                />

                <TouchableOpacity
                    onPress={() => searchProduct(keyword)}
                >
                    <EvilIcons name="search" size={24} color="black" style={styles.search} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setKeyword("")}
                >
                    <MaterialIcons name="clear" size={24} color="black" style={styles.search} />
                </TouchableOpacity>

            </View>

            <View style={styles.containerError}>
                {error ?
                    <Text style={styles.textError}>{error}</Text>
                    :
                    null}
            </View>

        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    container2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderWidth: 2,
        width: '80%',
        fontSize: 20,
        fontWeight: 'bold',
    },
    search: {
        padding: 3,
        marginHorizontal: 2,
        borderRadius: 5,
        fontSize: 30
    },
    containerError: {
        alignSelf: 'center',
    },
    textError: {
        color: 'red',
        fontSize: 15
    }
})