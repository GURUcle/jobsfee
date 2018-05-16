import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBar,
  View
} from 'react-native';
import { Icon } from 'react-native-material-ui';


export default function(text){
  return class extends Component {
    constructor(props, context) {
      super(props, context);
    }

    render() {
      return (
        <View style={styles.container}>
            <Icon name={text} size={54} />
            <Text>{text.toUpperCase()}</Text>
          </View>
      );
    }
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    backgroundColor: '#455A64',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
