import React, { Component } from 'react';
import Material from '../MaterialView';
import { Button, ThemeProvider, ActionButton, Toolbar } from 'react-native-material-ui';
import {
    View,
    Text,
    StyleSheet,
    ToastAndroid, ScrollView, Platform
} from 'react-native';
import NavBar from '../NavBar';
let toCamelCase = s=> {
  s = s.toString();
  // remove all characters that should not be in a variable name
  // as well underscores an numbers from the beginning of the string
  s = s.replace(/([^a-zA-Z0-9_\- ])|^[_0-9]+/g, "").trim().toLowerCase();
  // uppercase letters preceeded by a hyphen or a space
  s = s.replace(/([ -]+)([a-zA-Z0-9])/g, (a,b,c) => c.toUpperCase());
  // uppercase letters following numbers
  s = s.replace(/([0-9]+)([a-zA-Z])/g, (a,b,c) => b + c.toUpperCase());

  return s;
}

export default class  extends Component {
  constructor(props) {
      super(props)    
      this.state = {
        active : 'today',
        hidden : true
      }    
  }

  addToPhotos(){

  }
  addAlert(){
    this.props.screenProps.rootNavigation.navigate('NewJob');
  }
  addShoppingCart(){

  }
  render() {
    return <Material>
      <NavBar
        title="Job Tab"
        image={require('../../Images/image-2.png')}
      />
      <View style = { global.styles.MainContainer }>
        <Text style = { global.styles.textStyle }> Job Tab Screen </Text>
      </View>

      <ActionButton
        actions={[
            { icon: 'add-alert', label: 'New Job' },
            { icon: 'add-shopping-cart', label: 'New Sell' },
            { icon: 'add-to-photos', label: 'New Ads' }
        ]}
        hidden={this.state.bottomHidden}
        icon="add"
        transition="speedDial"
        onPress={(action,d) => {
          action = toCamelCase(action);
          if(this[action]){
            this[action]();
          }
        }}
        style={{
            positionContainer: { bottom: 76 },
        }}
    />
    </Material>
  }
}