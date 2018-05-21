import React, { Component } from 'react';
import Material from '../MaterialView';
import NavBar from '../NavBar';
import md5 from "react-native-md5";
import { Bubbles } from 'react-native-loader';
import {
    View,
    Text,
    StyleSheet,
    Platform,
    Alert,
    TextInput
  } from 'react-native';
  import { NavigationBar,Title,Button,Icon,ImageBackground } from '@shoutem/ui';
  const addMargin = Platform.OS === 'ios' ? 0 : 20;
  const addPaddin = Platform.OS === 'ios' ? 0 : 5;
  export default class  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading : false,          
            UserName: '',
            errorMessage : '',
            UserEmail: '',
            UserPassword: '',
            UserPassword2: ''
        }
    }
    register() {
            
      console.log(this.state.UserEmail, this.state.UserPassword);
      if(!this.state.UserEmail)
        return this.setState({errorMessage: "Email can not be empty"});
      if(!this.state.UserPassword)
        return this.setState({errorMessage: "Password can not be empty"});
      if(this.state.UserPassword != this.state.UserPassword2)
        return this.setState({errorMessage: "Password not match"});
      if(!this.state.UserName)
        return this.setState({errorMessage: "Username can not be empty"});
      this.setState({loading : true});
          // Sign in with email and pass.
        // [START authwithemail]
        global.firebase.auth().createUserWithEmailAndPassword(this.state.UserEmail, this.state.UserPassword).catch((error)=> {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode === 'auth/weak-password') {
              this.setState({loading : false,errorMessage: 'The password is too weak.'});
            } else {
              this.setState({loading : false,errorMessage: errorMessage});
            }
            // [END_EXCLUDE]
          }).then(user=>{
            if(!user) return;
            firebase.auth().currentUser.updateProfile({
              displayName: this.state.UserName,
              photoURL: "https://gravatar.com/avatar/"+md5.hex_md5(this.state.UserEmail)+"?s=200"
            }).then(()=> {
              this.main();            
            }, (error) =>{
              // An error happened.
            });
            // [START sendemailverification]
            firebase.auth().currentUser.sendEmailVerification().then(()=>{
              // Email Verification sent!
              // [START_EXCLUDE]
              console.log('Email Verification Sent!');
              // [END_EXCLUDE]
            });
            // [END sendemailverification]            
          });
          // [END authwithemail]
    }
    login() {        
        this.props.navigation.navigate('Login');
    }
    main() {        
        this.props.navigation.navigate('Main');
    }
    render() {
      return <View style={global.styles.ViewContainer}>
              <NavBar
                buttonOnPress = {() => this.login()}
                title="Sign Up"
                image={require('../../Images/image-3.png')}
              />
              { this.state.loading && 
                  <View style={global.styles.MainContainer}>                
                      <View style={global.styles.Center}>
                          <Bubbles size={10} color="#1CAFF6"/>
                      </View>
                  </View>
              }
              { !this.state.loading && 
                <View style = { global.styles.MainContainer }>
                  { !!this.state.errorMessage && 
                    <View style={global.styles.Center}>
                        <Text>{this.state.errorMessage}</Text>
                    </View>
                  }
                  <TextInput
                    placeholder="Enter User Name"
                    returnKeyType="next"
                    onChangeText={name => this.setState({UserName : name})}
                    value={this.state.UserName}
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                    onSubmitEditing={() => { this.UserEmailTextInput.focus(); }}
                    />
                  <TextInput
                    ref={(input) => { this.UserEmailTextInput = input; }}              
                    placeholder="Enter User Email"
                    keyboardType="email-address"
                    returnKeyType="next"
                    onChangeText={email => this.setState({UserEmail : email})}
                    value={this.state.UserEmail}                    
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                    onSubmitEditing={() => { this.UserPasswordTextInput.focus(); }}
                    />
          
                  <TextInput
                    ref={(input) => { this.UserPasswordTextInput = input; }}
                    onSubmitEditing={() => { this.UserPassword2TextInput.focus(); }}                  
                    placeholder="Enter User Password"
                    onChangeText={password => this.setState({UserPassword : password})}
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                    secureTextEntry={true}
                    returnKeyType="next"
                    />

                  <TextInput
                    ref={(input) => { this.UserPassword2TextInput = input; }}
                    placeholder="Repeat Password"
                    onChangeText={password => this.setState({UserPassword2 : password})}
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                    secureTextEntry={true}
                    returnKeyType="done"
                    />
                    <Button onPress={()=>{this.register()}}><Text>Sing Up</Text></Button>
                </View>
              }
        </View>
    }
  }