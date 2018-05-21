import React, { Component } from 'react';
import MaterialPage from '../MaterialPage';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';
import RNPickerSelect from 'react-native-picker-select';


export default class  extends Component {
  constructor(props) {
      super(props)
      this.state = {
        title : '',
        job : ''
      }
  }
  render() {
    return <MaterialPage
        title="New Job"
        buttonOnPress={() => this.props.navigation.goBack()}
        image={require('../../Images/image-2.png')}
    >
      <Sae
        label='Title'
        iconClass={FontAwesomeIcon}
        iconName={'pencil'}
        iconColor={'#6C6CAA'}
        labelStyle={{ color: '#6C6CAA' }}
        inputStyle={{ color: '#6C6CAA' }}
        // TextInput props
        autoCapitalize={'none'}
        autoCorrect={true}
        value={this.state.title}
        onChangeText={value=>{this.setState({title:value})}}
      />
      <RNPickerSelect
                    items={global.jobs}
                    placeholder={{}}
                    onValueChange={(value) => {
                        this.setState({
                            jobs: value,
                        });
                    }}
                >
                    
                </RNPickerSelect>
    </MaterialPage>;
  }
}