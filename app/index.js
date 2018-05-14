import React from 'react';
import Root, {AppFontLoader } from './config/router';
console.log("ICI")
console.log(Root)

class App extends React.Component {
  render() {
    return <AppFontLoader>
      <Root />
    </AppFontLoader>;
  }
}

export default App;
