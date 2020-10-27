import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Pages from './src/pages';
import Routes from './src/routes';

let isLoading = false;

function onclick() {
  if (isLoading) {
    isLoading = true;
  } else {
    isLoading = false;
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
