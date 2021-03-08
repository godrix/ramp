/* eslint-disable react/style-prop-object */
// TODO: FIX rule eslint dump 🤦‍♂️
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from '@routes/index';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Routes />
    </NavigationContainer>
  );
}
