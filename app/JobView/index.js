import React, { Component } from 'react';
import {Alert} from 'react-native';
import MaterialPage from '../MaterialPage';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';
import RNPickerSelect from 'react-native-picker-select';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { View, StyleSheet,Text,TextInput, Platform } from 'react-native';

const COLOR = '#7771ab';
const BORDER = {
  borderColor : "#ddd",
  borderWidth : 0,
  borderTopLeftRadius : 5,
  borderTopRightRadius : 5,
}
const PICKER = {
  paddingTop: 13,
  paddingHorizontal: 10,
  paddingBottom: 12,
  borderBottomWidth: 2,
  borderBottomColor: COLOR,
  color: COLOR,
  ...BORDER
};
const pickerSelectStyles = StyleSheet.create({
  inputIOS: PICKER,
  inputAndroid: PICKER,
  icon : {
    borderTopColor: COLOR,    
  }
});
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      paddingHorizontal: 10
  },
  smallLabel : {
      backgroundColor: 'transparent',
      fontFamily: 'Arial',
      fontWeight: 'bold',
      color: COLOR,
      fontSize : 12
  },
  descInput : {
    height : 50
  }
});

export default class  extends Component {
  constructor(props) {
    super(props)
    this.state = props.navigation.state.params;
  }
  render() {
    return <MaterialPage
        title="Job"
        buttonOnPress={() => this.props.navigation.goBack()}
        image={require('../../Images/image-2.png')}
        actions={['email', 'phone', 'sms', 'favorite']}
        actionIcon="share"
        actionType="toolbar"
        actionOnPress={(action) => alert(action) }
    >
      <Text>{this.state.title}</Text>
    </MaterialPage>;
  }
}