import React, { Component } from 'react';
import Material from '../Material';
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
      return <Material>
        <View style = { global.styles.MainContainer }>
              <Text style = { global.styles.textStyle }>Message Tab Screen</Text>
        </View>
      </Material>
    }
  }