import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import MapPreview from '../components/MapPreview'

import * as Location from 'expo-location'

import { googleMapsApiKey } from '../databases/googleMaps'

const LocationSelector = ({ navigation }) => {

    const [location, setLocation] = useState({ latitude: "", longitude: "" })
    const [confirm, setConfirm] = useState(false)

    const [address, setAddress] = useState('')

    const [error, setError] = useState('')

    //OBTENER DIRECCION
    useEffect(() => {

        (async () => {

            console.log('entrando a useEffect...')

            try {

                console.log('location es', location)

                if (location.latitude) {

                    const url_reverse_geocode = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${googleMapsApiKey}`;

                    const response = await fetch(url_reverse_geocode);

                    const data = await response.json();

                    console.log('data es', data)
                    console.log('setadrees es', data.results[0].formatted_address)

                    setAddress(data.results[0].formatted_address);
                }
            } catch (e) {
                setError(e.message);
                console.log(error)
            }
        })();
    }, [location])

    const handleGetLocation = async () => {

        console.log('entrando a handleGetLocation...')

        try {

            let { granted } = await Location.requestForegroundPermissionsAsync();

            if (!granted) {
                Alert.alert('El permiso a la ubicación fue denegado')
                return
            }

            console.log('granted fue true')

            let locationUser = await Location.getCurrentPositionAsync({})

            const objectLocation = {
                latitude: locationUser.coords.latitude,
                longitude: locationUser.coords.longitude,
            }

            console.log('objectLocation', objectLocation)

            setLocation(objectLocation)
            setConfirm(true)

        } catch (err) {
            console.log('error en location es:', err)
            Alert.alert('Ubicación no encontrada')
        }
    }

    const onConfirmAddress = () => { }

    return (

        <View>

            <Text>Mi direccion</Text>

            {location ? (

                <View>
                    <Text>{location.latitude}</Text>
                    <Text>{location.longitude}</Text>

                    <MapPreview location={location} />

                    <Text>
                        Formatted address: adress
                    </Text>
                    
                </View>

            ) : (

                <View>
                    <Text>{error}</Text>
                </View>
            )}

            {!confirm &&

                <TouchableOpacity style={styles.touchable} onPress={handleGetLocation}>

                    {location ? (

                        <Text style={styles.textTouchable}>

                            Cambiar ubicación

                        </Text>
                    ) : (

                        <Text style={styles.textTouchable}>

                            Obtener ubicación

                        </Text>
                    )}

                </TouchableOpacity>
            }

            {confirm &&
                <TouchableOpacity style={styles.touchable} onPress={handleSubmitLocation}>
                    <Text style={styles.textTouchable}> Guardar ubicación </Text>
                </TouchableOpacity>
            }

            <Button
                title="Volver"
                onPress={() => navigation.goBack()}
            />

        </View>

    )
}

export default LocationSelector

const styles = StyleSheet.create({})