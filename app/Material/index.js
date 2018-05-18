import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBar,
  View
} from 'react-native';
import { ThemeProvider } from 'react-native-material-ui';
import { Icon } from 'react-native-material-ui';
//import firebase from 'react-native-firebase';

class Material extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return this.props.children ? (
      <ThemeProvider uiTheme={global.uiTheme}>
          {this.props.children}
      </ThemeProvider>
    ) : <View style={global.styles.MainContainer}></View>;
  }
};

export default Material;
