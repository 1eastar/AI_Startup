import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class ResultScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    
    render(){
        return (
            <View style={styles.container}>
              <Text>ResultScreen</Text>
              <Button 
                title = 'go Home'
                onPress = {() => this.props.navigation.navigate('Main')}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
