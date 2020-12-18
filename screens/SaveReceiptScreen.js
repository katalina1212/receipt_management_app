import React from 'react';
import {StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { connect } from "react-redux";
import { addReceipts, deleteReceipts } from "../redux/action/ReceiptsAction";
import ImagePicker from 'react-native-image-crop-picker';
import TesseractOcr, { LANG_ENGLISH, LEVEL_WORD } from 'react-native-tesseract-ocr';

const defaultPickerOptions = {
    cropping: true,
    height: 500,
    width: 600,
  };

class SaveReceiptScreen extends React.Component{

    state={
        title:"",
        price:null,
        category:"",
        recognizedText:null,
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


    appCamera = async (options = defaultPickerOptions) => {
        //const image = await ImagePicker.openCamera(options);
        const image = await ImagePicker.openPicker(options);
        const recognizedText = await TesseractOcr.recognize(
            image.path,
            LANG_ENGLISH,
            {}
          );
          console.log(recognizedText);
          this.extractInfo(recognizedText);
    };

    extractInfo = (recognizedText) => {
        if (recognizedText !== null) {
          const lines = recognizedText.split("\n");
          for (let line of lines) {
            let lowerCase = line.toLocaleLowerCase();
    
            if (lowerCase.indexOf("total") != -1) {
              let splitted = lowerCase.split(" ");
              let final = "";
    
              for (let word of splitted) {
                if (!isNaN(parseInt(word)) || word === ".") {
                  final += word;
                
              }
    
              console.log(final);
              this.setState({price:final})
            }
          }
        }
      }
    }

render(){
    if (this.state.price === null)  {
    this.appCamera();
    }

return(
<View>
      <TextInput onChangeText={(text)=>{this.setState({title:text})}} placeholder="Please type title" />
      <TextInput onChangeText={(text)=>{this.setState({price:text})}} placeholder="Please type price" />
      <TextInput onChangeText={(text)=>{this.setState({category:text})}} placeholder="Please type category" />
      <Button title="Save" style={styles.button} onPress={() => this.props._addReceipts(this.props.login.user.objectId, this.state.title, this.state.price, this.state.category)} />
      </View>)
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
      marginBottom: 5 , 
    },
  
    button: {
      marginBottom: 5 , 
    }
  });

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