import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const InputForm = ({
    label,
    onChange,
    error = '',
    isSecureTextEntry = false
}) => {

    const [input, setInput] = useState('')

    const onChangeInput = (text) => {
        setInput(text)
        onChange(text)
    }

    return (
        <View>
            <Text>{label}</Text>
            <TextInput
                value={input}
                onChangeText={onChangeInput}
                secureTextEntry={isSecureTextEntry}
            />
            {error ?
                <Text>{error}</Text>
                :
                null
            }

        </View>
    )
}

export default InputForm

const styles = StyleSheet.create({})