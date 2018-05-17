import React, { Component } from 'react';
import Material from '../Material';
import { Button } from 'react-native-material-ui';
import {
    View,
    Text,
    StyleSheet,
    Alert,
    TextInput
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
        <TextInput
          placeholder="Enter User Email"
          onChangeText={email => this.setState({UserEmail : email})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          />
 
        <TextInput
          placeholder="Enter User Password"
          onChangeText={password => this.setState({UserPassword : password})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          secureTextEntry={true}
          />
                <Button primary text='Login' onPress={()=>{this.login()}}/>
                <Button accent text='Register' onPress={()=>{this.register()}} />
            </View>
        </Material>
    }
  }