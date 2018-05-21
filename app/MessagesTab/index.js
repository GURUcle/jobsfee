import React, { Component } from 'react';
import Material from '../MaterialView';
import NavBar from '../NavBar';

import { Button, ThemeProvider} from 'react-native-material-ui';
import {
    View,
    Text,
    StyleSheet
  } from 'react-native';
  import { NavigationBar,Title } from '@shoutem/ui';
  export default class  extends Component {
    constructor(props) {
        super(props)        
    }
    login() {        
        this.props.navigation.navigate('Login');
    }
    render() {
      return <Material>
        <View style={global.styles.TabContainer}>
          <NavBar
            title="Messages"
            image={require('../../Images/image-6.png')}
          />
        </View>
      </Material>
    }
  }