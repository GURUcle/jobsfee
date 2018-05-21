import React, { Component } from 'react';
import Material from '../MaterialView';
import NavBar from '../NavBar';

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
        <NavBar
          title="Offer"
          image={require('../../Images/image-5.png')}
        />
        <View style = { global.styles.MainContainer }>
              <Text style = { global.styles.textStyle }>Offers Tab Screen</Text>
        </View>
      </Material>
    }
  }