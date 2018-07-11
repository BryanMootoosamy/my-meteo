/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text, 
  View, 
  StatusBar,
  Image
} from 'react-native';
import About from "./Components/About";
import Search from "./Components/Search";
import { TabNavigator, createBottomTabNavigator } from "react-navigation";
  Search.navigationOptions = {
    tabBarIcon: () => {
      return (<Image source={require('./Components/icons/home.png')} style={{width: 20, height: 20}}/>)
  }
  }
  const Tabs = createBottomTabNavigator({
    Search,
    About
  },
  {tabBarOptions: {
    showIcon: true,
    showLabel: false,
    indicatorStyle: {
      height: 2,
      backgroundColor: "#FFF"
    },
    style: {
        backgroundColor: "#a2273C",
        borderTopWidth: 1,
        borderColor: "#3f101c"
      }
    }
  }
)
  export default class App extends Component<Props> {
    render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar hidden={true}/>
        <Tabs/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
