import React, { Component } from 'react';
import Material from '../MaterialView';
import NavBar from '../NavBar';
import { GiftedChat } from 'react-native-gifted-chat'

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
    state = {
      messages: [],
    }
    componentWillMount() {
      this.setState({
        messages: [ 
          {
            _id: 1,
            text: 'Hello developer',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'React Native',
              avatar: 'https://facebook.github.io/react/img/logo_og.png',
            },
          },
        ],
      })
    }
   
    onSend(messages = []) {
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, messages),
      }))
    }
    render() {
      return <Material>
        <View style={global.styles.TabContainer}>
          <NavBar
            title="Messages"
            image={require('../../Images/image-6.png')}
          />
          <GiftedChat
            messages={this.state.messages}
            onSend={messages => this.onSend(messages)}
            user={{
              _id: 1,
            }}
          />
        </View>
      </Material>
    }
  }