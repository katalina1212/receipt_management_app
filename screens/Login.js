import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function App(props) {
  return (
    <View style={styles.container}>
      <Text>Email</Text>
      <TextInput style={styles.textInput} placeholder="Please type your email" />
      <Text>Password</Text>
      <TextInput style={styles.textInput} placeholder="Please type your password" />
      <Button title="Login" onPress={() => props.navigation.navigate('RegisterScreen')} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textInput: {
    borderColor:'grey',
    borderWidth: 1 ,
  },
});
