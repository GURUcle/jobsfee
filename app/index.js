require('./data');
import React from 'react';
import {COLOR} from 'react-native-material-ui';
import {StyleSheet} from 'react-native';
import { createSwitchNavigator,NavigationActions } from 'react-navigation';
import firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyDAHJcDm-xI0GiNg71CH50BlBnip8SuSz0",
  authDomain: "jobfee-e27d5.firebaseapp.com",
  databaseURL: "https://jobfee-e27d5.firebaseio.com",
  projectId: "jobfee-e27d5",
  storageBucket: "jobfee-e27d5.appspot.com",
  messagingSenderId: "169510976247"
});
global.firebase = firebase;


global.auth = true; 
global.uiTheme = {
  palette: {
      primaryColor: COLOR.green500,
      accentColor: COLOR.pink500,
  },
};
global.styles = StyleSheet.create(
  {
    ScrollContainer : {
      flex:1,
      margin: 10
    },
   MainContainer: {
      justifyContent: 'center',
      flex:1,
      margin: 10
   },
   TabContainer: {
      flex:1,
      margin: 0
   },
   ViewContainer: {
      justifyContent: 'center',
      flex:1,
      margin: 0
   },
   Center : {
    alignItems: 'center',
   },
   TextInputStyleClass: {
 
    textAlign: 'center',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: '#2196F3',
    borderRadius: 5 ,
  },
   textStyle: {
      fontSize: 22,
      margin: 5,        
      textAlign: 'center',
      color: '#000',
   },
   SmallTextStyle: {
      fontSize: 15,
      margin: 5,        
      textAlign: 'center',
      color: '#000',
   },
   
  });
import AppStack from "./AppStack";
import Splash from "./SplashScreen";
import Login from "./LoginScreen";
import Register from "./RegisterScreen";

global.AppStack = AppStack;
const TopLevelNav = createSwitchNavigator({
  Splash: { screen: Splash },
  Login: { screen: Login },
  Register: { screen: Register },
  Main: { screen: global.AppStack },
}, {
  initialRouteName: 'Splash',
  headerMode: 'none',
  transitionConfig: () => ({
      screenInterpolator: (props) => { 
        // fade transition
        const {position, scene} = props

        const index = scene.index
    
        const translateX = 0
        const translateY = 0
    
        const opacity = position.interpolate({
            inputRange: [index - 0.7, index, index + 0.7],
            outputRange: [0.3, 1, 0.3]
        })
    
        return {
            opacity,
            transform: [{translateX}, {translateY}]
        }
      }
  })
});
export default TopLevelNav;
