import React, { Component } from 'react';
import Material from '../MaterialView';
import { Button, ThemeProvider,Toolbar} from 'react-native-material-ui';
import {
    View,
    Text,
    StyleSheet
  } from 'react-native';
import NavBar from '../NavBar';
  

  export default class  extends Component {
    constructor(props) {
        super(props)        
    }
    login() {        
        this.props.navigation.navigate('Login');
    }
    render() {
      return <Material>
        <NavBar
          title="Settings"
          image={require('../../Images/image-4.png')}
        />
        <View style = { global.styles.MainContainer }>
              <Text style = { global.styles.textStyle }>{firebase.auth().currentUser.displayName}</Text>
              <Button primary text='Sign Out' onPress={()=>{firebase.auth().signOut();}}/>
        </View>
      </Material>
    }
  }