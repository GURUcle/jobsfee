
import React,{Component} from 'react';
import { AppLoading, Font } from 'expo';
import FontAwesome from '../../node_modules/@expo/vector-icons/fonts/FontAwesome.ttf';
import MaterialIcons from '../../node_modules/@expo/vector-icons/fonts/MaterialIcons.ttf';
import RubikRegular from '../../node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf';
import RubiconIconFont from '../../node_modules/@shoutem/ui/fonts/rubicon-icon-font.ttf';
import Roboto from './Roboto-Regular.ttf';
export default class AppFontLoader extends Component {
    state = {
        fontLoaded: false
    };
    async componentWillMount() {
        try {
            await Font.loadAsync({
                FontAwesome,
                'Material Icons' : MaterialIcons,
                'Rubik-Regular' : RubikRegular,
                'rubicon-icon-font':RubiconIconFont,
                MaterialIcons,
                Roboto
            });
            this.setState({ fontLoaded: true });
        } catch (error) {
            console.log('error loading icon fonts', error);
        }
    }
    render() {
        if (!this.state.fontLoaded) {
            return <AppLoading />;
        }
        return this.props.children;
    }
}