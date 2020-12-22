import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { connect } from "react-redux";
import { registerUser } from "../redux/action/RegisterAction"


class Register extends React.Component{
  state={email:"", password:"", password2:""}
  componentDidUpdate(){
    if (this.props.user.fetched){
      this.props.navigation.goBack();
    }
  }
render(){
  return(
    <View style={styles.container}>
      <Image style={styles.image} source={{uri:"https://i.ibb.co/QmQ0h9T/N-vtelen-2.png"}} />
      <View style={styles.inputBox}> 
      <Text style={styles.headerText}>Email</Text>
      <TextInput onChangeText={(text)=>{this.setState({email:text})}} style={styles.textInput} placeholder="Please type your email" />
      </View>
      <View style={styles.inputBox}> 
      <Text style={styles.headerText}>Password</Text>
      <TextInput onChangeText={(text)=>{this.setState({password:text})}} style={styles.textInput} secureTextEntry={true} placeholder="Please type your password" />
      </View>
      <View style={styles.inputBox}> 
      <Text style={styles.headerText}>Re-type password</Text>
      <TextInput onChangeText={(text)=>{this.setState({password2:text})}} style={styles.textInput} secureTextEntry={true} placeholder="Re-type your password" />
      </View>
      <View style={styles.bottonContainer}>
      <Button title="Register" style={styles.button} onPress={() => this.props._registerUser(this.state.email, this.state.password)} />
      </View>
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
      user: store.user
    }
  };
  
  const dispatcher = (dispatch) => ({
    _registerUser: (...args) => dispatch(registerUser(...args))
  });
  
  export default connect(selector, dispatcher)(Register);