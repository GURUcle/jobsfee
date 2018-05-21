import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Platform
} from 'react-native';
import { NavigationBar,Title,Button,Icon,ImageBackground } from '@shoutem/ui';
const ImageSourcePropType = require('ImageSourcePropType');
const addMargin = Platform.OS === 'ios' ? 0 : 20;
const addPaddin = Platform.OS === 'ios' ? 0 : 5;
class NavBar  extends Component {
    constructor(props) {
        super(props);
    }
    _onPress = (event) => {
        if (!this.props.buttonOnPress) {
            return;
        }
        // process raw event...
        this.props.buttonOnPress(event);
    }
    render() {
        let navBar = <NavigationBar
            styleName={(!!this.props.image ? "clear" : "fade")}
            leftComponent={ this.props.buttonOnPress ? (
                <Button onPress={() => this._onPress()} >
                    <Icon style={{
                        color: !!this.props.image ? '#FFFFFF' : '#222222',
                        fontSize: 40,
                        paddingTop : 0 + addPaddin,
                        marginTop: 10 + addMargin,
                    }} name={this.props.buttonIcon} />
                </Button>
            ):undefined}
            centerComponent={<Title style={{
                fontFamily: 'Roboto',
                fontSize: 20,
                paddingTop : 5,
                marginTop: 10 + addMargin,
                color: !!this.props.image ? '#FFFFFF' : '#222222', //edit color here for your Title
            }}>{this.props.title}</Title>}
            rightComponent={this.props.component}
        />;
        return !!this.props.image ? (<ImageBackground
                source={this.props.image}
                style={{ height: 70 }}
                >
                {navBar}
            </ImageBackground>) : (navBar)
    }
}
NavBar.propTypes = {
    /**
     * Callback that is called continuously when the user is dragging the map.
     */
    buttonIcon : PropTypes.string,
    buttonOnPress : PropTypes.func,
    image : ImageSourcePropType,
    title : PropTypes.string.isRequired,
    component : PropTypes.element
};
// Specifies the default values for props:
NavBar.defaultProps = {
    buttonIcon: 'left-arrow',
    image : null
  };
export default NavBar;