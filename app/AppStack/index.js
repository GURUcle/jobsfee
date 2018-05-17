import React, { Component } from 'react';
import HomeScreen from '../HomeScreen';
import { createStackNavigator } from 'react-navigation';

export default createStackNavigator({ Home: HomeScreen },{
    initialRouteName: 'Home',
    headerMode: 'none',   
});