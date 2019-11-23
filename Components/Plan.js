import React from "react"
import {View,Text,StyleSheet,Dimensions,TouchableOpacity} from "react-native"
import { FontAwesome,AntDesign } from "@expo/vector-icons";

const Plan= ({text, isChecked, checked, deleted}) => {
    return (
        <View style={styles.planContainer}>
            <View style={styles.planitem}>
                <View style={styles.makerow}>
                    <TouchableOpacity 
                        onPress={checked}
                        hitSlop={{ top: 25, bottom: 25, left: 25, right: 25 }}>
                        <FontAwesome name={isChecked?"check-circle":"circle-o"} size={17} style={styles.checkbtn}/>
                    </TouchableOpacity>
                    <Text style={styles.plan}>{text}</Text>
                </View>
                <TouchableOpacity 
                    onPress={deleted}
                    hitSlop={{ top: 25, bottom: 25, left: 25, right: 25 }}>
                    <AntDesign name="closecircle" size={17}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const {width,height} = Dimensions.get('window'); 

const styles = StyleSheet.create({
    planContainer: {
        padding: 5,
        marginTop: 20,
        borderBottomWidth:1,
        width: width-80, 
    },
    planitem: {
        justifyContent:'space-between',
        flexDirection:'row',
    },
    plan:{
        //
        fontSize: 17,
        marginLeft: 10,
    },
    makerow:{
        //
        flexDirection:'row',
    },
    checkbtn:{
        //
    },
})

export default Plan;