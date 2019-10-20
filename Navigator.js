import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
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
  AppExplain : {screen : AppExplainScreen},
  Login : {screen : LoginScreen},
  Result : {screen : ResultScreen},
  Test : {screen : TestScreen},
  TestExplain : {screen : TestExplainScreen},
  },
  {
    initialRouteName : 'Login',
  }
);

export default createAppContainer(AppStackNavigator);
