import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Navigator from './navigator/navigator';
import Store from './redux/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={Store}><Navigator /></Provider>
  
  )}



