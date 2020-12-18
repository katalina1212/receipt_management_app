import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { connect } from "react-redux";
import { getToken } from "../redux/action/LoginAction";


class Login extends React.Component{
  state={email:"", password:""}
  componentDidUpdate(){
    if (this.props.user.fetched && ("sessionToken" in this.props.user.user)){
      this.props.navigation.navigate("HomeScreen");
  }
}
render(){
  return(
    <View style={styles.container}>
    <Text>{this.props.user.fetched && !("sessionToken" in this.props.user.user)?"Email or password is incorrect":null}</Text>
    <Text>Email</Text>
    <TextInput onChangeText={(text)=>{this.setState({email:text})}} style={styles.textInput} placeholder="Please type your email" />
    <Text>Password</Text>
    <TextInput onChangeText={(text)=>{this.setState({password:text})}} style={styles.textInput} secureTextEntry={true} placeholder="Please type your password" />
    <Button title="Login" style={styles.button} onPress={() => this.props._getToken(this.state.email, this.state.password)} />
    <Button title="Register" style={styles.button} onPress={() => this.props.navigation.navigate("RegisterScreen")} />
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
    marginBottom: 5 , 
  },

  button: {
    marginBottom: 5 , 
  }
});

const selector = (store) => {
    return {
      user: store.login
    }
  };
  
  const dispatcher = (dispatch) => ({
    _getToken: (...args) => dispatch(getToken(...args))
  });
  
  export default connect(selector, dispatcher)(Login);
