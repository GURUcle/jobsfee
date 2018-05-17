
import React,{Component} from 'react';
import { AppLoading, Font } from 'expo';
import FontAwesome from '../../node_modules/@expo/vector-icons/fonts/FontAwesome.ttf';
import MaterialIcons from '../../node_modules/@expo/vector-icons/fonts/MaterialIcons.ttf';
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