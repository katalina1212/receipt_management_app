import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { connect } from "react-redux";
import { registerUser } from "../redux/action/RegisterAction"


class Register extends React.Component{
  state={email:"", password:"", password2:""}
render(){
  if (this.props.user.fetched){
    this.props.navigation.goBack();
  }
  return(
    <View style={styles.container}>
      <Text>Email</Text>
      <TextInput onChangeText={(text)=>{this.setState({email:text})}} style={styles.textInput} placeholder="Please type your email" />
      <Text>Password</Text>
      <TextInput onChangeText={(text)=>{this.setState({password:text})}} style={styles.textInput} placeholder="Please type your password" />
      <Text>Re-type password</Text>
      <TextInput onChangeText={(text)=>{this.setState({password2:text})}} style={styles.textInput} placeholder="Re-type your password" />
      <Button title="Register" onPress={() => this.props._registerUser(this.state.email, this.state.password)} />
      <Text>{this.props.user.fetched.toString()}</Text>
      <StatusBar style="auto" />
    </View>
  );
}
};



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

const selector = (store) => {
    return {
      user: store.user
    }
  };
  
  const dispatcher = (dispatch) => ({
    _registerUser: (...args) => dispatch(registerUser(...args))
  });
  
  export default connect(selector, dispatcher)(Register);