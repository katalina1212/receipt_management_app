import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
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
    <Image style={styles.image} source={{uri:"https://i.ibb.co/QmQ0h9T/N-vtelen-2.png"}} />
    <Text>{this.props.user.fetched && !("sessionToken" in this.props.user.user)?"Email or password is incorrect":null}</Text>
    <View style={styles.inputBox}> 
    <Text style={styles.headerText}>Email </Text>
    <TextInput onChangeText={(text)=>{this.setState({email:text})}} style={styles.textInput} placeholder="Please type your email" />
    </View>
    <View style={styles.inputBox}> 
    <Text style={styles.headerText}>Password</Text>
    <TextInput onChangeText={(text)=>{this.setState({password:text})}} style={styles.textInput} secureTextEntry={true} placeholder="Please type your password" />
    </View>
    <View style={styles.bottonContainer}>
    <Button title="Login" style={styles.button} onPress={() => this.props._getToken(this.state.email, this.state.password)} />
    </View>
    <View style={styles.bottonContainer}>
    <Button title="Click here to register" style={styles.button} onPress={() => this.props.navigation.navigate("RegisterScreen")} />
    </View>
    <StatusBar style="auto" />
  </View>

  )}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },

  textInput: {
    borderColor:'grey',
    width: 300 ,
    borderWidth: 1 ,
  },

  button: {
    marginBottom: 5 , 
  },

  headerText:{
    fontSize: 20 , 
    marginBottom: 10,
  },

  inputBox:{
    marginBottom: 20 ,
  },

  bottonContainer:{
    marginBottom: 20 ,
  },

  image:{
    height: 100 ,
    width: 100,

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
