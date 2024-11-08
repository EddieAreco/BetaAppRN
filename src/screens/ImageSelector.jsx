import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as ImagePicker from 'expo-image-picker'
import * as ExpoLibrary from 'expo-media-library'
import { setImageCamera } from '../features/Auth/authSlice'
import { useGetProfileImageQuery, usePostProfileImageMutation } from '../services/shopService'

const ImageSelector = ({ navigation }) => {

    const [image, setImage] = useState(null)

    const [ isImageFromCamera, setIsImageFromCamera ] = useState(false)

    const [ imageUri, setImageUri ] = useState(null)

    const { localId } = useSelector(state => state.auth.value)

    const { data: imageFromBase } = useGetProfileImageQuery(localId)

    const [triggerPostImage, result] = usePostProfileImageMutation()

    const dispatch = useDispatch()

    const verifyCameraPermissions = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync()

        return granted
    }

    const verifyLibraryPermissions = async () => {

        const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync() //mag

        return granted
    }

    const pickImage = async () => {

        setIsImageFromCamera(true)

        try {

            const isCameraOk = await verifyCameraPermissions()

            if (isCameraOk) {

                let result = await ImagePicker.launchCameraAsync({
                    allowsEditing: true,
                    aspect: [9, 16],
                    quality: 0.2,
                    base64: true,
                    mediaTypes: ImagePicker.MediaTypeOptions.All,
                });

                if (!result.canceled) {

                    setImageUri(result.assets[0].uri)

                    const base64 = `data:image/jpeg;base64,${result.assets[0].base64}`

                    setImage(base64)
                }
            }

        } catch (error) {
            console.log(error)
        }
    }

    const pickImageFromGallery = async () => {

        try {

            setIsImageFromCamera(false)

            const isGalleryOk = await verifyLibraryPermissions()

            if (isGalleryOk) {

                let result = await ImagePicker.launchImageLibraryAsync({
                    allowsEditing: true,
                    aspect: [9, 16],
                    quality: 0.2,
                    base64: true,
                    mediaTypes: ImagePicker.MediaTypeOptions.All,
                })

                if (!result.canceled) {

                    const base64 = `data:image/jpeg;base64,${result.assets[0].base64}`

                    setImage(base64)
                }

            }

        } catch (error) {
            console.log(error)
        }

    }

    const confirmImage = async () => {

        try {

            dispatch(setImageCamera(image))
            triggerPostImage({ localId, image })

            if (isImageFromCamera) {
                const result = await ExpoLibrary.createAssetAsync(imageUri)
            }

            navigation.goBack()

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <View>

            {image || imageFromBase ? (
                <>
                    <Image
                        source={{ uri: image || imageFromBase?.image }}
                        style={{ width: 400, height: 400, borderColor: 'black', borderWidth: 2, backgroundColor: 'yellow' }}
                    />
                    <Button
                        title="Confirm image"
                        onPress={confirmImage}
                    />
                    <Button
                        title='Tomar otra foto'
                        onPress={pickImage}
                    />
                    <Button
                        title='Elegir una foto de la galeria'
                        onPress={pickImageFromGallery}
                    />
                </>
            ) : (
                <>
                    <View>
                        <Text>
                            No hay imagen seleccionada
                        </Text>
                    </View>
                    <Button
                        title='Tomar foto'
                        onPress={pickImage}
                    />
                    <Button
                        title='Elegir una foto de la galeria'
                        onPress={pickImageFromGallery}
                    />
                </>
            )}
        </View>
    )
}

export default ImageSelector

const styles = StyleSheet.create({})