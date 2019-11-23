import React from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';
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
                    <Text style={{marginBottom:10, fontSize:25}}>Sign In</Text>
                    <View style={styles.makerow}>
                        <IDPW message='ID     :'/>
                        <Inputbox message='아이디를 입력해주세요.        '/>
                    </View>
                    <View style={styles.makerow}>
                        <IDPW message='PW   :'/>
                        <Inputbox message='비밀번호를 입력해주세요.    '/>
                    </View>
                    <View style={styles.button}>
                        <CustomBotton title='Login' buttonColor='#097234' titleColor='#fff' onPress={() => this.props.navigation.navigate('AppExplain')}/>
                    </View>
                    {/* <Button 
                        title = 'login'
                        onPress = {() => this.props.navigation.navigate('AppExplain')}/> */}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    // height:"50%"
  },
  loginitems:{
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:1,
    borderRadius:10,
    padding:30,
    marginBottom:80,
    marginTop:80,
  },
  makerow:{
    flexDirection:'row',
    alignItems:'flex-start',
  },
  logoimage: {
    flex:1,
    resizeMode:'center',
  },
  button: {
      height:50,
      paddingTop:5,
  }
});
