import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'

import { useSignInMutation } from '../services/authService'
import { useDispatch } from 'react-redux'

import { setUser } from '../features/Auth/authSlice'

const LoginScreen = ({ navigation }) => {

    const dispatch = useDispatch()

    const [triggerSignIn, result] = useSignInMutation()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        if (result.isSuccess) {

            dispatch(
                setUser({
                    email: result.data.email,
                    idToken: result.data.idToken,
                    localId: result.data.localId
                })
            )
        }
    }, [result])

    const onSubmit = () => {
        try {

            // const validation = signupSchema.validateSync({ email, password })
            triggerSignIn({
                email,
                password,
                returnSecureToken: true
            })

        } catch (error) {

            console.log('Catch error LOGIN')
            console.log(error.path)
            console.log(error.message)

        }
    }

    const handleNavigate = () => {
        navigation.navigate('SignUpScreen')
    }

    return (
        <View>
            <Text>LoginScreen</Text>

            <Text>Iniciar Sesion</Text>

            <InputForm
                label={"Email"}
                onChange={setEmail}
                error="Email no valido"
            />
            <InputForm
                label={"Password"}
                onChange={setPassword}
                isSecureTextEntry
                error="Password no valido"
            />

            <SubmitButton
                title="Ingresar"
                onPress={onSubmit}
            />

            <Text>No tengo una cuenta</Text>

            <SubmitButton
                title="Registrarse"
                onPress={handleNavigate}
            />
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})