import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from './Screens/MainScreen';
import AppExplainScreen from './Screens/AppExplainScreen';
import LoginScreen from './Screens/LoginScreen';
import ResultScreen from './Screens/ResultScreen';
import TestScreen from './Screens/TestScreen';
import TestExplainScreen from './Screens/TestExplainScreen';

const AppStackNavigator = createStackNavigator(
  {
  Main : {screen : MainScreen},
  AppExplain : {screen : AppExplainScreen,},
  Login : {screen : LoginScreen},
  Result : {screen : ResultScreen},
  Test : {
      screen : TestScreen,
      navigationOptions: {
          header:null
      }
    },
  TestExplain : {screen : TestExplainScreen},
  },
  {
    initialRouteName : 'Login',
  }
);

const bottomTapNavi = createBottomTabNavigator(
  {
    Main: {screen : MainScreen},
  },
  {
    initialRouteName : 'Main',
    mode:'modal',
    headerMode: 'none',
  }
)

export default createAppContainer(AppStackNavigator);
