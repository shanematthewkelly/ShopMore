import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import AuthenticateScreen from './app/screens/AuthenticateScreen';
import HomeScreen from './app/screens/HomeScreen';
import Navbar from './app/components/navigation/Navbar'

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <HomeScreen />
      <Navbar style={{ zIndex: 20 }}></Navbar>
    </View>
  );


}

