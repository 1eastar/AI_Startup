import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './Navigator'
import {HeaderoverlayProvider} from './contexts/Headerovelay';
import {CorrectProvider} from './contexts/Correct';
import {AnswerProvider} from './contexts/answer';

export default class App extends React.Component {
  render() {
    return (
      <HeaderoverlayProvider>
        <CorrectProvider>
            <Navigation/>
        </CorrectProvider>
      </HeaderoverlayProvider>
    );
  }
}