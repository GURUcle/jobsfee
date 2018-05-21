import React, { Component } from 'react';
import Material from '../MaterialView';
import { Bubbles } from 'react-native-loader';
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
          routeName : 'Login',
          params : {}
        });
    }
    main() {
        this.props.navigation.navigate({
          routeName : 'Main' ,
          params : {}
        });
    }
    componentWillMount() {
      // Listen for authentication state to change.
      global.firebase.auth().onAuthStateChanged((user) => {
        if (user != null) {
          this.main();
        }else{
          this.login();
        }
      });
    }
    render() {
      return <Material>
        <View style = { global.styles.MainContainer }>
          <View style={global.styles.Center}>
            <Bubbles size={10} color="#1CAFF6"/>
          </View>      
        </View>
      </Material>
    }
  }