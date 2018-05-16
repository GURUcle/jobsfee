import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { View, Text } from 'react-native';
import { TabRouter } from 'react-navigation';

import BlankView from '../BlankView';
import Container from '../Container';

import { Toolbar, BottomNavigation, Icon, COLOR, ThemeProvider } from 'react-native-material-ui';
export {AppFontLoader} from './font';

const uiTheme = {
  palette: {
      primaryColor: COLOR.green500,
      accentColor: COLOR.pink500,
  },
};

const TabRoute = TabRouter({
  "view-list": { screen: BlankView("view-list") },
  "chat": { screen: BlankView("chat") },
  "send": { screen: BlankView("send") },
  "settings": {screen: BlankView("settings")}
  }, {
    initialRouteName: 'view-list',
  }
);

class TabContentNavigator extends Component {
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

        this.state = { active: 'view-list' };
    }
    componentWillUpdate
    render() {
        return <ThemeProvider uiTheme={uiTheme}>
            <Container>
                <TabContentNavigator value={this.state} key={this.state} />
                <BottomNavigation active={this.state.active} >
                    <BottomNavigation.Action
                        key="view-list"
                        icon="view-list"
                        label="Jobs"
                        onPress={() => this.setState({ active: 'view-list' })}
                    />
                    <BottomNavigation.Action
                        key="chat"
                        icon="chat"
                        label="Messages"
                        onPress={() => this.setState({ active: 'chat' })}
                    />
                    <BottomNavigation.Action
                        key="send"
                        icon="send"
                        label="Invitation"
                        onPress={() => this.setState({ active: 'send' })}
                    />
                    <BottomNavigation.Action
                        key="settings"
                        icon="settings"
                        label="Settings"
                        onPress={() => this.setState({ active: 'settings' })}
                    />
                </BottomNavigation>
            </Container>
          </ThemeProvider>;
    }
};
