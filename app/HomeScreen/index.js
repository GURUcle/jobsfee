import React from 'react';
import Root, {AppFontLoader } from '../config/router';
import { createStackNavigator } from 'react-navigation';
import BlankView from '../BlankView';


export default class App extends React.Component {
  render() {
    return <AppFontLoader>
      <Root />
    </AppFontLoader>;
  }
}
// export default createStackNavigator({
//     Home: { screen: App },
//     Chat: { screen: BlankView("chat") }
// }, {
//   headerMode: 'none',
// })