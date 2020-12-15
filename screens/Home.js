import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function App() {

  const adatok = [
    {id: 1, title: 'receipt1', price: '$125', category:'food'},
    {id: 2, title: 'receipt2', price: '$120', category:'travel'},
    {id: 3, title: 'receipt3', price: '$25', category:'entertainment'},
    {id: 4, title: 'receipt4', price: '$12', category:'eat out'},
  ]

  return (
    <View style={styles.container}>
      <Button title="Photo your receipt" onPress={() => props.navigation.navigate('')} />
      <StatusBar style="auto" />

      <FlatList
        data={data}
        renderItem={({item}) => <Text style={styles.listElements}>{item.title} - {item.price} - {item.category}</Text>}
        keyExtractor={(item) => item.id+"asd"} />
        
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

  listElements: {
    borderColor:'grey',
    borderWidth: 1 ,
  },
});
