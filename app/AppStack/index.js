import React, { Component } from 'react';
import HomeScreen from '../HomeScreen';
import NewJob from '../NewJob';
import { createStackNavigator } from 'react-navigation';

export default createStackNavigator({
    Home: HomeScreen,
    NewJob
},{
    initialRouteName: 'Home',
    headerMode: 'none',   
});