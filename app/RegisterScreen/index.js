import React, { Component } from 'react';
import { Button, ThemeProvider} from 'react-native-material-ui';
import {
    View,
    Text,
    StyleSheet
  } from 'react-native';

  export default class  extends Component {
    constructor(props) {
        super(props)        
    }
    login() {        
        this.props.navigation.navigate('Login');
    }
    render() {
      return <ThemeProvider uiTheme={global.uiTheme}>
        <View style = { styles.MainContainer }>
              <Text style = { styles.textStyle }>Register Screen</Text>      
              <Button primary text='Login' onPress={()=>{this.login()}} />
        </View>
      </ThemeProvider>
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