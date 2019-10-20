import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class TestExplainScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    
    render(){
        return (
            <View style={styles.container}>
              <Text>TestExplainScreen</Text>
              <Button 
                title = 'Start'
                onPress = {() => this.props.navigation.navigate('Test')}/>
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
