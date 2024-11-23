import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { clearUser } from '../features/Auth/authSlice'
import { useGetProfileImageQuery } from '../services/shopService'

const MyProfile = ({ navigation }) => {

    const dispatch = useDispatch()

    const { imageCamera, localId, user } = useSelector(state => state.auth.value)

    const { data: imageFromBase } = useGetProfileImageQuery(localId)

    const lauchCamera = async () => {
        navigation.navigate('ImageSelector')
    }

    const defaultImageRoute = '../../assets/favicon.png'

    const lauchLocation = () => {
        navigation.navigate('LocationSelector')
    }

    const handleClearUser = () => {
        dispatch(clearUser())
    }

    return (
        <View>

            {imageFromBase || imageCamera ? (
                <View>
                    <Image
                        source={{ uri: imageFromBase?.image || imageCamera }}
                        style={{ width: 200, height: 200 }}
                        resizeMode='cover'
                    />

                    <Button
                        title="Change image"
                        onPress={lauchCamera}
                    />

                </View>
            ) : (
                <View>

                    <Image
                        source={require(defaultImageRoute)}
                        style={{ width: 200, height: 200 }}
                        resizeMode='cover'
                    />

                    <Button
                        title="Add image"
                        onPress={lauchCamera}
                    />

                </View>

            )}

            <Button
                title="Mi dirección"
                onPress={lauchLocation}
            />

            <Button
                title="Cerrar Sesión"
                onPress={handleClearUser}
            />

        </View>
    )
}

export default MyProfile

const styles = StyleSheet.create({})