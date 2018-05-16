import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from "./HomeScreen";
import Login from "./LoginScreen";
import Register from "./RegisterScreen";


const TopLevelNav = createStackNavigator({
  Login: { screen: Login },
  Register: { screen: Register },
  Main: { screen: Home },
}, {
  headerMode: 'none',
  transitionConfig: () => ({
      screenInterpolator: (props) => { 
        // fade transition
        const {position, scene} = props

        const index = scene.index
    
        const translateX = 0
        const translateY = 0
    
        const opacity = position.interpolate({
            inputRange: [index - 0.7, index, index + 0.7],
            outputRange: [0.3, 1, 0.3]
        })
    
        return {
            opacity,
            transform: [{translateX}, {translateY}]
        }
      }
  })
});
export default TopLevelNav;
