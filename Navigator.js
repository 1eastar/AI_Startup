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
import SignupScreen from './Screens/SignupScreen';
import {AntDesign,Ionicons,FontAwesome} from "@expo/vector-icons";

const bottomTapNavi = createBottomTabNavigator(
  {
    Plan: {
      screen : PlanScreen,
      navigationOptions : {
        tabBarIcon: ({tintColor}) => (
          <FontAwesome name="sticky-note-o" size={25} style={{ color:tintColor }} />
        ),
      }
    },
    Main: {
      screen : MainScreen,
      navigationOptions : {
        tabBarIcon: ({tintColor}) => (
          <AntDesign name="home" size={25} style={{ color:tintColor }} />
        ),
      }
    },
    Mypage: {
      screen : MypageScreen,
      navigationOptions : {
        tabBarIcon: ({tintColor}) => (
          <FontAwesome name="user-o" size={25} style={{ color:tintColor }} />
        ),
      }
    },
  },
  {
    tabBarOptions : {
      showLabel:false,
    },
    initialRouteName : 'Main',
  }
)

const AppStackNavigator = createStackNavigator(
  {
  Tab : bottomTapNavi,
  AppExplain : {screen : AppExplainScreen,},
  Login : {screen : LoginScreen},
  Signup : {screen : SignupScreen},
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
    mode:'modal',
    headerMode : 'none',
  }
);



export default createAppContainer(AppStackNavigator);
