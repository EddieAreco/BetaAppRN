import { StatusBar } from 'expo-status-bar';
import { useCallback, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Home from './src/screens/Home';
import ListCategories from './src/screens/ListCategories';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
export default function App() {

  const [fontsLoaded, fontError] = useFonts(
    {
      'Handjet-Bold': require('./assets/fonts/Handjet-Bold.ttf'),
      'Handjet-Medium': require('./assets/fonts/Handjet-Medium.ttf'),
      'Handjet-Regular': require('./assets/fonts/Handjet-Regular.ttf'),
      'Pirata': require('./assets/fonts/PirataOne-Regular.ttf'),
      'Matemasie': require('./assets/fonts/Matemasie-Regular.ttf'),
      'Titilium': require('./assets/fonts/TitilliumWeb-SemiBold.ttf'),
    }
  )

  const onLaoutRootView = useCallback( async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if ( !fontsLoaded && !fontError) {
    return null
  }

  const [categorySelected, setCategorySelected] = useState("")

  return (
    <View style={styles.container}>

      {
        categorySelected ? 
        <ListCategories categorySelected={categorySelected} setCategorySelected={setCategorySelected} /> 
        :
        <Home setCategorySelected={setCategorySelected} />
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
});
