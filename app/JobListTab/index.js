import React, { Component } from 'react';
import Material from '../MaterialView';
import { Pulse } from 'react-native-loader';
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
        loading : true,
        hidden : true,
        posts : []
      }
      var posts = global.firebase.database().ref('posts');
      posts.orderByChild('created').startAt().limitToLast(100).once('value',(snapshot)=> {
        this.setState({loading:false,posts : Object.values(snapshot.val() || []).reverse()});
        console.log('posts-database',Object.values(snapshot.val() || []).reverse())
      });
      posts.on('child_added',(snapshot)=> {
        var val = snapshot.val();
        this.setState({posts : [val,...this.state.posts]});
        console.log('posts',snapshot.val())
      });
      
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
        { this.state.loading &&
          <View style={global.styles.Center}>
            <Pulse size={10} color="#1CAFF6"/>
          </View>      
        }
        { !this.state.loading &&
        <ScrollView>
          {
            this.state.posts.length > 0 && 
            this.state.posts.map(post=>(
              <View style={{
                borderColor: 'red',
                borderWidth:2,
                paddingVertical: 5,
                marginVertical: 5
              }} key={post.uuid}>
                <Text style = { global.styles.textStyle }> {post.type}/{post.title} </Text>
                <Text style={{
                  textAlign: 'center',
                }}> {post.description} </Text>
              </View>
            ))
          }
          {
            this.state.posts.length == 0 &&
            <Text style = { global.styles.textStyle }> No posts </Text>
          }
        </ScrollView>
        }
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