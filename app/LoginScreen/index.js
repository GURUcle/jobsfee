import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
  } from 'react-native';

  export default class  extends Component {
    constructor(props) {
        super(props)        
    }
    login() {        
        this.props.navigation.navigate('Main');
    }
    register() {        
        this.props.navigation.navigate('Register');
    }
    render() {
      return <View style = { styles.MainContainer }>
            <Text style = { styles.textStyle }>Login Screen</Text>
            <Button title='Login' onPress={()=>{this.login()}} />
            <Button title='Register' onPress={()=>{this.register()}} />;
            
      </View>
    }
  }
  const styles = StyleSheet.create(
    {
     MainContainer:
     {
        justifyContent: 'center',
        flex:1,
        margin: 10
      
     },
     
     textStyle:
     {
        fontSize: 22,
        margin: 5,        
        textAlign: 'center',
        color: '#000',
     },
     
    });