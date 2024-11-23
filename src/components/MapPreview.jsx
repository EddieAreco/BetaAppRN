import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { googleMapsApiKey } from '../databases/googleMaps'

const MapPreview = ( {location} ) => {

    const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:Me%7C${location.latitude},${location.longitude}&key=${googleMapsApiKey}`;

  return (
    <View style={{...styles.container}}>
        <Image source={{uri: mapPreviewUrl}} style={{width: '100%', height: 200}} />
    </View>
  )
}

export default MapPreview

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
    }
})