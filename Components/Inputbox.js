import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Dimensions } from 'react-native';

const Inputbox = ({message}) => {
    return (
            <TextInput
                style={styles.input}
                placeholder = {`${message}`}
                maxLength = {15}
                returnKeyType = 'done'
                />
    );
}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // marginHorizontal:-100,
    // width:50,
  },
  input : {
    color: '#3e4fee',
    borderBottomWidth:1,
    marginLeft:5,
    // alignItems:'baseline',
  },
});

export default Inputbox;