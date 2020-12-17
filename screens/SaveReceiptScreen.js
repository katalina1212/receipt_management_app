import React from 'react';
import {Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { connect } from "react-redux";
import { getPeople } from "../redux/action/PeopleAction";
import { addReceipts, deleteReceipts } from "../redux/action/ReceiptsAction";

class SaveReceiptScreen extends React.Component{

    state={
        title:"",
        price:"",
        category:"",
    }

    componentWillUnmount(){
        console.log("a");
        this.props._deleteReceipts();
    }

    componentDidUpdate(){
        if(this.props.savedReceipts.fetched){
            this.props.navigation.goBack();
        }
    }

render(){
    console.log(this.props.login)
return(
<View>
      <TextInput onChangeText={(text)=>{this.setState({title:text})}} placeholder="Please type title" />
      <TextInput onChangeText={(text)=>{this.setState({price:text})}} placeholder="Please type price" />
      <TextInput onChangeText={(text)=>{this.setState({category:text})}} placeholder="Please type category" />
      <Button title="Save" onPress={() => this.props._addReceipts(this.props.login.user.objectId, this.state.title, this.state.price, this.state.category)} />
      </View>)
}
}

const selector = (store) => {
  return {
    login: store.login,
    savedReceipts: store.savedReceipts
  }
};

const dispatcher = (dispatch) => ({
  _addReceipts: (...args) => dispatch(addReceipts(...args)),
  _deleteReceipts: (...args) => dispatch(deleteReceipts(...args))
});

export default connect(selector, dispatcher)(SaveReceiptScreen);