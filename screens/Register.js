import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Email</Text>
      <TextInput style={styles.textInput} placeholder="Please type your email" />
      <Text>Password</Text>
      <TextInput style={styles.textInput} placeholder="Please type your password" />
      <Text>Re-type password</Text>
      <TextInput style={styles.textInput} placeholder="Re-type your password" />
      <Button title="Register" onPress={() => props.navigation.navigate('')} />
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
