import React, { Component } from 'react';
import {Alert} from 'react-native';
import MaterialPage from '../MaterialPage';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';
import RNPickerSelect from 'react-native-picker-select';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { View, StyleSheet,Text,TextInput, Platform } from 'react-native';
import { ActionButton } from 'react-native-material-ui';
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
      this.state = {
        user : 1,//global.firebase.auth().currentUser.uid,
        uuid : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
          return v.toString(16);
        }),
        title : '',
        job : '',
        description : '',
        jobType : '',
        salary : '',
        created: global.firebase.database.ServerValue.TIMESTAMP,
        type : '',
      };
  }
   writeNewJob() {
    // Get a key for a new Post.
    var newPostKey = firebase.database().ref().child('jobs').push().key;
  
    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/posts/' + newPostKey] = this.state;
    
    if(!this.state.title)
    return this.setState({errorMessage: "title can not be empty"});
    if(!this.state.job)
    return this.setState({errorMessage: "job can not be empty"});
  
    if(!this.state.jobType)
    return this.setState({errorMessage: "jobType can not be empty"});

    if(!this.state.description)
    return this.setState({errorMessage: "description can not be empty"});

  
    if(!this.state.salary)
    return this.setState({errorMessage: "salary can not be empty"});
    
    if(!this.state.type)
    return this.setState({errorMessage: "type can not be empty"});

    
    global.firebase.database().ref().update(updates).then(ok=>{
      Alert.alert(
        'Information',
        'Job Posted',
        [
          {text: 'OK', onPress: () => this.props.navigation.goBack()},
        ],
        { cancelable: false }
      );      
    }).catch(err=>{
      console.error(err);
      alert("Post error");
    });
  }
  render() {
    return <MaterialPage
        title="New Job"
        actionIcon="done"
        actionOnPress={()=>{this.writeNewJob()}}
        buttonOnPress={() => this.props.navigation.goBack()}
        image={require('../../Images/image-2.png')}
    >
      <KeyboardAwareScrollView
        keyboardOpeningTime={50}
        enableOnAndroid={true}
        enableResetScrollToCoords={true}
        ><View>
      <Sae
        ref={(input) => { this.titleInput = input; }}
        onSubmitEditing={() => { this.jobSelect.togglePicker(); }}
        returnKeyType='next'
        label='Title'
        iconClass={FontAwesomeIcon}
        iconName={'pencil'}
        iconColor={COLOR}
        labelStyle={{ color: COLOR }}
        inputStyle={{ ...BORDER ,color: COLOR }}
        defaultValue={''}
        // TextInput props     
        autoCapitalize={'none'}
        autoCorrect={true}
        value={this.state.title}
        onChangeText={value=>{this.setState({title:value})}}
      />
      <View style={{ paddingVertical: 5 }} />  
      <Text style={styles.smallLabel } >Jobs</Text>
      <RNPickerSelect
        value={0}
        ref={(input) => { this.jobSelect = input; }}
        onDownArrow={() => { this.jobTypeSelect.togglePicker(); }}          
        items={global.jobs}
        placeholder={{}}
        style={{ ...pickerSelectStyles }}
        onValueChange={(value) => {
            this.setState({
                job: value,
            });
        }}
      >
      </RNPickerSelect>
      <View style={{ paddingVertical: 5 }} />      
      <Text style={styles.smallLabel } >Type</Text>
      <RNPickerSelect
        value={0}
        ref={(input) => { this.jobTypeSelect = input; }}
        onDownArrow={() => { this.descriptionInput.focus(); }}          
      
        items={global.jobsType}
        placeholder={{}}
        style={{ ...pickerSelectStyles }}
        onValueChange={(value) => {
            this.setState({
                jobType: value,
            });
        }}
      >
      </RNPickerSelect>
      
      <View style={{ paddingVertical: 5 }} />
      <Text style={[styles.smallLabel,{
        marginBottom : 5,
      }] } >Description</Text>          
      <TextInput
        ref={(input) => { this.descriptionInput = input; }}
        onSubmitEditing={() => { this.salaryInput.focus(); }} 
        returnKeyType='next'
        // TextInput props
        autoCapitalize={'none'}
        autoCorrect={true}
        multiline = {true}
        numberOfLines = {10}
        value={this.state.description}
        placeholder="Description"
        onChangeText={value=>{this.setState({description:value})}}
        style={[pickerSelectStyles.inputAndroid,{
          height:130,
          textAlignVertical:"top",
          fontSize: 20,
        }]}
      />
      <View style={{ paddingVertical: 5 }} />       
      <Sae
        label='Salary'
        ref={(input) => { this.salaryInput = input; }}
        returnKeyType='done'
        iconClass={FontAwesomeIcon}
        iconName={'money'}
        iconColor={COLOR}
        labelStyle={{ color: COLOR }}
        inputStyle={{ ...BORDER ,color: COLOR }}
        defaultValue={'0'}
        // TextInput props     
        keyboardType={Platform.select({ios : 'decimal-pad', android: 'numeric'})}
        autoCapitalize={'none'}
        autoCorrect={true}
        value={this.state.salary}
        onChangeText={value=>{this.setState({salary:value})}}
      />
      <View style={{ paddingVertical: 5 }} /> 
      </View></KeyboardAwareScrollView>
    </MaterialPage>;
  }
}