import React, { Component } from 'react';
import Material from '../MaterialView';
import { Pulse } from 'react-native-loader';
import { ThemeProvider, ActionButton, Toolbar } from 'react-native-material-ui';
import {
  ListView,
  Caption,
  Button,
  Card,
  Subtitle,
  Icon,
  Image,
  TouchableOpacity,
  ImageBackground,
  Divider,
  Tile,
  Title
} from '@shoutem/ui';
import {
    Alert,
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
        loading : false,
        hidden : true,
        posts : [{
          title : "Fabrication de pattes",
          description : "Job a temps partiel, du lundi au dimanche...",
          user : 'xxxxxxxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
          }),
          uuid : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
          }),
          job : 0,
          jobType : 'PART-TIME',
          salary : '500',
          created: Date.now(),
          type : 'jobs'
        }]
      }
      
  }
  async componentWillMount() {
    this.posts = global.firebase.database().ref('posts');
    this.posts.orderByChild('created').startAt().limitToLast(100).once('value',(snapshot)=> {
      this.setState({loading:false,posts : Object.values(snapshot.val() || []).reverse()});
      console.log('posts-database',Object.values(snapshot.val() || []).reverse())
    });
    this.posts.on('child_added',(snapshot)=> {
      var val = snapshot.val();
      this.setState({posts : [val,...this.state.posts]});
      console.log('posts',snapshot.val())
    });
  }
  async componentWillUnmount() {
    this.posts.off()
  }  
  addToPhotos(){
  }
  addJob(){
    this.props.screenProps.rootNavigation.navigate('NewJob');
  }
  jobView(post){
    this.props.screenProps.rootNavigation.navigate({routeName: "JobView", params : post});
  }
  addShoppingCart(){

  }
  renderPost(post){
    return <TouchableOpacity onPress={()=>{this.jobView(post)}}>
    <ImageBackground
      styleName="large-banner"
      source={{ uri: "https://shoutem.github.io/static/getting-started/restaurant-1.jpg" }}
    >
      <Tile>
        <Title styleName="md-gutter-bottom">{post.title}</Title>
        <Subtitle styleName="sm-gutter-horizontal">{post.description}</Subtitle>
      </Tile>
    </ImageBackground>
    <Divider styleName="line" />
  </TouchableOpacity>
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
            <ListView
              data={this.state.posts}
              renderRow={(item)=>this.renderPost(item)}
            />
          }
          {
            this.state.posts.length == 0 &&
            <Text style = { global.styles.textStyle }> No posts </Text>
          }
        </ScrollView>
        }
      </View>

      <ActionButton
        onPress={()=>{this.addJob()}} 
        icon="add"
          style={{
            positionContainer: { bottom: 76 },
        }}
    />
    </Material>
  }
}