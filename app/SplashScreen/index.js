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
        this.props.navigation.navigate({
          routeName : global.auth ? 'Login' : 'Main' ,
          params : {}
        });
    }
    componentWillMount() {
      setTimeout(() => {
        this.login();
      }, 5000);
    }
    render() {
      return <Material>
        <View style = { global.styles.MainContainer }>
          <Text style = { global.styles.textStyle }>Splah Screen</Text>             
          <Text style = { global.styles.SmallTextStyle }>Wait 5s ...</Text>             
        </View>
      </Material>
    }
  }