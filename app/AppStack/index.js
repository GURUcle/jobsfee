import React, { Component } from 'react';
import HomeScreen from '../HomeScreen';
import NewJob from '../NewJob';
import JobView from '../JobView';
import { createStackNavigator } from 'react-navigation';

export default createStackNavigator({
    Home: HomeScreen,
    NewJob,JobView
},{
    initialRouteName: 'Home',
    headerMode: 'none',   
});