import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { connect } from "react-redux";
import { getUser } from "../redux/action/LoginAction";


class Login extends React.Component{
  state={email:"", password:""}
render(){
  if (this.props.user.fetched && (this.props.user.user.username in this.props.user.user)){
    this.props.navigation.navigate("HomeScreen");
  }
  return(
    <View style={styles.container}>
    <Text>{this.props.user.fetched && !(this.props.user.user.username in this.props.user.user)?"Email or password is incorrect":null}</Text>
    <Text>Email</Text>
    <TextInput onChangeText={(text)=>{this.setState({email:text})}} style={styles.textInput} placeholder="Please type your email" />
    <Text>Password</Text>
    <TextInput onChangeText={(text)=>{this.setState({password:text})}} style={styles.textInput} placeholder="Please type your password" />
    <Button title="Login" onPress={() => this.props._getUser(this.state.email, this.state.password)} />
    <Button title="Register" onPress={() => this.props.navigation.navigate("RegisterScreen")} />
    <StatusBar style="auto" />
  </View>

  )}
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
      user: store.login
    }
  };
  
  const dispatcher = (dispatch) => ({
    _getUser: (...args) => dispatch(getUser(...args))
  });
  
  export default connect(selector, dispatcher)(Login);
