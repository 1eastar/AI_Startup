import React from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, Dimensions } from 'react-native';
import Inputbox from '../Components/Inputbox';
import IDPW from '../Components/IDPW';
import CustomBotton from '../Components/Custombutton';

export default class SignupScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    
    render(){
        return (
            <View style={styles.container}>
                <Image
                    style={styles.logoimage}
                    source={require('../assets/logo.png')}
                    />
                <View style={styles.loginitems}>
                    {/* <Text style={{borderWidth:1, marginTop:-100}}>LoginScreen</Text> */}
                    <Text style={{marginBottom:10, marginLeft:80, fontSize:25}}>Sign Up</Text>
                    <View style={styles.makerow}>
                        <IDPW message='ID'/>
                        <View style={[styles.input,{marginLeft:96}]}>
                            <Inputbox message=''/>
                        </View>
                    </View>
                    <View style={styles.makerow}>
                        <IDPW message='PASSWORD'/>
                        <View style={[styles.input,{marginLeft:35}]}>
                            <Inputbox message=''/>
                        </View>
                    </View>
                    <View style={styles.makerow}>
                        <IDPW message='CONFIRM PW'/>
                        <View style={[styles.input,{marginLeft:23}]}>
                            <Inputbox message=''/>
                        </View>
                    </View>
                    <View style={styles.makerow}>
                        <IDPW message='NAME'/>
                        <View style={[styles.input,{marginLeft:69}]}>
                            <Inputbox message=''/>
                        </View>
                    </View>
                    <View style={styles.makerow}>
                        <IDPW message='GRADE'/>
                        <View style={[styles.input,{marginLeft:64}]}>
                            <Inputbox message=''/>
                        </View>
                    </View>
                    <View style={styles.makerow}>
                        <IDPW message='RANK'/>
                        <View style={[styles.input,{marginLeft:73}]}>
                            <Inputbox message=''/>
                        </View>
                    </View>
                    <View style={styles.button}>
                        <CustomBotton title='NEXT' buttonColor='#11a84e' titleColor='#fff' onPress={() => this.props.navigation.navigate('Login')}/>
                    </View>
                    {/* <Button 
                        title = 'login'
                        onPress = {() => this.props.navigation.navigate('AppExplain')}/> */}
                </View>
            </View>
        );
    }
}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    // height:"50%"
  },
  loginitems:{
    flex:3,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    borderWidth:1,
    borderRadius:10,
    padding:30,
    marginBottom:80,
    marginTop:80,
    width: width-100,
  },
  makerow:{
    flexDirection:'row',
    alignItems:'flex-start',
    marginVertical:4,
  },
  logoimage: {
    flex:1,
    resizeMode:'center',
    marginTop:70,
  },
  button: {
      height:50,
      paddingTop:5,
      marginTop:10,
      marginLeft:80,
  },
  input:{
      width:width-270,
  }
});
