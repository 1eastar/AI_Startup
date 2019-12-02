import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions,Text, Modal,TouchableHighlight } from 'react-native'
import { withNavigation } from 'react-navigation'
import { Ionicons,FontAwesome } from '@expo/vector-icons';
import {HeaderoverlayConsumer, HeaderoverlayProvider} from '../contexts/Headerovelay';

class CustomHeader extends React.Component {

    render(){
        return (
            <View style={styles.container}>
                <Modal
                    animationType='fade'
                    transparent={true}
                    presentationStyle='overFullScreen'
                    visible={this.props.modalVisible}>
                        <View style={{backgroundColor:'rgba(0,0,0,0.5)'}}>
                            <View style={styles.ovelay}>
                                <Text>overlay 내용</Text>
                                <TouchableHighlight
                                    onPress={() => {
                                        this.props.setModalVisible(false)
                                    }}>
                                    <Text>Hide Modal</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                </Modal>

                <View style={styles.iconContainer}>
                    <TouchableOpacity 
                        onPress={() => {this.props.navigation.goBack()}}
                        hitSlop={{ top: 32, bottom: 32, left: 32, right: 32 }}
                        style={{marginLeft:20}}>
                        <Ionicons name='ios-arrow-back' size={30} color={'#fff'}/>
                    </TouchableOpacity>
                    <Text style={{color:'white', fontSize:24}}>A+i</Text>
                    <TouchableOpacity 
                        onPress={() => {this.props.setModalVisible(true)}} // overlay 설정 
                        hitSlop={{ top: 35, bottom: 35, left: 35, right: 35 }}
                        style={{marginRight:20}}>
                        <Ionicons name="ios-menu" size={35} color={'#fff'}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width:width,
        backgroundColor:'#097234',
        marginTop:23,
        height:53,
        alignItems:'center',
    },
    overlay:{
        backgroundColor:'red',
        width:width/2,
    }
})

export default withNavigation(CustomHeader);