import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  StatusBar,
  View,
  ScrollView
} from 'react-native';
import PropTypes from 'prop-types';
import NavBar from '../NavBar';
import { ThemeProvider } from 'react-native-material-ui';
import { Icon } from 'react-native-material-ui';
import FontLoader from '../FontLoader';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingTop: getStatusBarHeight()
  },
});

class MaterialPage extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
  return (<ThemeProvider uiTheme={global.uiTheme}>
      <FontLoader>
        <View style = { global.styles.ViewContainer }>
          <NavBar
            title={this.props.title}
            buttonOnPress = {this.props.buttonOnPress}
            buttonIcon = {this.props.buttonIcon}
            image = {this.props.image}
            component = {this.props.menuComponent}
          />
            <View style = { global.styles.ScrollContainer }>
              {this.props.children}
            </View>
        </View>
      </FontLoader>
    </ThemeProvider>)
  }
};

MaterialPage.propTypes = {
  buttonIcon : PropTypes.string,
  buttonOnPress : PropTypes.func,
  image : NavBar.propTypes.image,
  title : PropTypes.string.isRequired,
  menuComponent : PropTypes.element
};
// Specifies the default values for props:
MaterialPage.defaultProps = {
  ...NavBar.defaultProps
};

export default MaterialPage;
