import React, { Component } from 'react';
import { TabRouter } from 'react-navigation';
import { View, Text, StyleSheet } from 'react-native';
import { Toolbar, BottomNavigation } from 'react-native-material-ui';
import Material from '../Material';
import FontLoader from '../FontLoader';
import BlankView from '../Material';


const initView = 'view-list';

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
});

const TabRoute = TabRouter({
    "view-list": { screen: BlankView },
    "chat": { screen: BlankView },
    "send": { screen: BlankView },
    "settings": {screen: BlankView}
    }, {
      initialRouteName: initView,
    }
  );
  

class HomeTab extends Component {
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
  

  export default class  extends Component {
    constructor(props) {
        super(props);
        this.state = { active: initView };
    }
    componentWillUpdate
    render() {
      return <Material>
        <FontLoader>
          <View style={styles.container}>
              <HomeTab value={this.state} key={this.state} />
              <BottomNavigation active={this.state.active} >
                  <BottomNavigation.Action
                      key="view-list"
                      icon="view-list"
                      // label="Jobs"
                      onPress={() => this.setState({ active: 'view-list' })}
                  />
                  <BottomNavigation.Action
                      key="chat"
                      icon="chat"
                      // label="Messages"
                      onPress={() => this.setState({ active: 'chat' })}
                  />
                  <BottomNavigation.Action
                      key="send"
                      icon="send"
                      // label="Invitation"
                      onPress={() => this.setState({ active: 'send' })}
                  />
                  <BottomNavigation.Action
                      key="settings"
                      icon="settings"
                      // label="Settings"
                      onPress={() => this.setState({ active: 'settings' })}
                  />
              </BottomNavigation>
          </View>
        </FontLoader>
      </Material>;
    }
};
