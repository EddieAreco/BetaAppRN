import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import { useSignUpMutation } from '../services/authService'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/Auth/authSlice'

import * as yup from 'yup'
import { authSchema } from '../validations/authSchema'

const SignUpScreen = ({ navigation }) => {

    const dispatch = useDispatch()

    const [triggerSignUp, result] = useSignUpMutation()

    const [email, setEmail] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [errorRepeatPassword, setErrorRepeatPassword] = useState('')

    const handleNavigate = () => {
        navigation.navigate('LoginScreen')
    }

    useEffect(() => {
        if (result.isSuccess) {
            console.log("Sign-up successful", result.data);

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
        
            setErrorEmail('')
            setErrorPassword('')
            setErrorRepeatPassword('')
            
            const validation = authSchema.validateSync({ email, password, repeatPassword })

            triggerSignUp({
                email: email,
                password: password,
                returnSecureToken: true
            })
            console.log("Sign-up triggered", result);

        } catch (err) {

            switch (err.path) {

                case 'email':
                    setErrorEmail(err.message)
                    break;
                case 'password':
                    setErrorPassword(err.message)
                    break;
                case 'repeatPassword':
                    setErrorRepeatPassword(err.message)
                    break;

                default:
                    break;
            }
        }
    }

    return (
        <View>
            <Text>SignUpScreen</Text>

            <Text>Crear Cuenta</Text>

            <InputForm
                label={"Email"}
                onChange={setEmail}
                error={errorEmail}
            />

            <InputForm
                label={"Password"}
                onChange={setPassword}
                error={errorPassword}
            />

            <InputForm
                label={"Repetir Password"}
                onChange={setRepeatPassword}
                error={errorRepeatPassword}
            />

            <SubmitButton
                title="Registrarse"
                onPress={onSubmit}
            />

            <Text>Ya tengo una cuenta</Text>

            <SubmitButton
                title="Ingresar"
                onPress={handleNavigate}
            />

        </View>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({})