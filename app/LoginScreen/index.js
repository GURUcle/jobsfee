import React, { Component } from 'react';
import Material from '../Material';
import { Button } from 'react-native-material-ui';
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
        this.props.navigation.navigate('Main');
    }
    register() {        
        this.props.navigation.navigate('Register');
    }
    render() {
      return <Material>
            <View style = { global.styles.MainContainer }>
                <Text style = { global.styles.textStyle }>Login Screen</Text>
                <Button primary text='Login' onPress={()=>{this.login()}}/>
                <Button accent text='Register' onPress={()=>{this.register()}} />
            </View>
        </Material>
    }
  }