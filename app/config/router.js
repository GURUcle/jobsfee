import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { View, Text } from 'react-native';
import Container from '../Container';

import { Toolbar, BottomNavigation, Icon, COLOR, ThemeProvider } from 'react-native-material-ui';
export {AppFontLoader} from './font';

const uiTheme = {
  palette: {
      primaryColor: COLOR.green500,
      accentColor: COLOR.pink500,
  },
};

export default class  extends Component {
    constructor(props) {
        super(props);

        this.state = { active: 'view-list' };
    }
    componentWillUpdate
    render() {
        return <ThemeProvider uiTheme={uiTheme}>
            <Container>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name={this.state.active} size={54} />
                </View>
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
