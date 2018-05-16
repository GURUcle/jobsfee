import React, { Component } from 'react';
import { TabRouter } from 'react-navigation';
import BlankView from '../BlankView';

export const initView = 'view-list';

const TabRoute = TabRouter({
    "view-list": { screen: BlankView("view-list") },
    "chat": { screen: BlankView("chat") },
    "send": { screen: BlankView("send") },
    "settings": {screen: BlankView("settings")}
    }, {
      initialRouteName: initView,
    }
  );
  

export default class extends Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        active: props.value.active,
      };
    }
  
    //this method will not get called first time
    componentWillReceiveProps(newProps){
      this.setState({
        active: newProps.value.active,
      }); 
    }
  
    render() {
      const Component = TabRoute.getComponentForRouteName(this.state.active);
      return <Component/>;
    }
  }
  