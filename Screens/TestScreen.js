import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class TestScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    
    render(){
        return (
            <View style={styles.container}>
              <Text>TestScreen</Text>
              <Button 
                title = 'Finish'
                onPress = {() => this.props.navigation.navigate('Result')}/>
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
