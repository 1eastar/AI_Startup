import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const IDPW = ({message}) => {
    return (
            <Text style={styles.text}>{message}</Text>
        
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:-50,
    borderWidth:3,
    // marginHorizontal:-130
  },
  text : {
    color: '#030',
  },
});

export default IDPW;