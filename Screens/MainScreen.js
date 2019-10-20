import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class MainScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    
    render(){
        return (
            <View style={styles.container}>
              <Text>MainScreen</Text>
              <Button 
                title = 'Start Test'
                onPress = {() => this.props.navigation.navigate('TestExplain')}/>
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
