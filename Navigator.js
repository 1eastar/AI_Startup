import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from './Screens/MainScreen';
import AppExplainScreen from './Screens/AppExplainScreen';
import LoginScreen from './Screens/LoginScreen';
import ResultScreen from './Screens/ResultScreen';
import TestScreen from './Screens/TestScreen';
import TestExplainScreen from './Screens/TestExplainScreen';
import PlanScreen from './Screens/PlanScreen';
import MypageScreen from './Screens/MypageScreen';

const bottomTapNavi = createBottomTabNavigator(
  {
    Plan: {screen : PlanScreen},
    Main: {screen : MainScreen},
    Mypage: {screen : MypageScreen},
  },
  {
    tabBarOptions : {
      showLabel:false,
    },
    initialRouteName : 'Main',
    mode:'modal',
    headerMode : 'none',
  }
)

const AppStackNavigator = createStackNavigator(
  {
  Tab : bottomTapNavi,
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



export default createAppContainer(AppStackNavigator);
