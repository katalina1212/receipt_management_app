import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { getReceipts} from '../redux/action/ReceiptsAction';
import { connect } from "react-redux";

class Home extends React.Component{
  componentDidMount(){
    this.props._getReceipts(this.props.login.user.objectId);
  }
  render(){
    return (
      <View style={styles.container}>
        <Button title="Photo your receipt" onPress={() => this.props.navigation.navigate('SaveReceiptScreen')} />
        <Button title="update Page" onPress={() => this.props._getReceipts(this.props.login.user.objectId)} />
        <StatusBar style="auto" />
  
        <FlatList
          data={this.props.receipt.receipt.results}
          renderItem={({item}) => <Text style={styles.listElements}>{item.title} - {item.price} - {item.category}</Text>}
          keyExtractor={(item) => item.id+"asd"} />
          
      </View>
    );
  }
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

const selector = (store) => {
    return {
      receipt: store.receipts, 
      login: store.login
    }
  };
  
  const dispatcher = (dispatch) => ({
    _getReceipts: (...args) => dispatch(getReceipts(...args))
  });
  
  export default connect(selector, dispatcher)(Home);