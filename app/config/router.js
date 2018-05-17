import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { View, Text } from 'react-native';

import TabNavigator, { initView } from './TabNavigator';

import Container from '../Container';

import { Toolbar, BottomNavigation, ThemeProvider } from 'react-native-material-ui';
export {AppFontLoader} from './font';




export default class  extends Component {
    constructor(props) {
        super(props);
        this.state = { active: initView };
    }
    componentWillUpdate
    render() {
        return <ThemeProvider uiTheme={global.uiTheme}>
            <Container>
                <TabNavigator value={this.state} key={this.state} />
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
