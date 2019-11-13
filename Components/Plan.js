import React from "react"
import {View,Text,StyleSheet,Dimensions} from "react-native"
import { AntDesign } from "@expo/vector-icons";

const TodoItem= ({text, isChecked}) => (
    <View style={styles.planContainer}>
        <View>
            <TouchableOpacity onPress={checked}>
                <AntDesign name={isChecked?"circle-o":"check-circle"} size={20} style={styles.checkbtn}/>
            </TouchableOpacity>
            <Text style={styles.planitem}>{text}</Text>
        </View>
        <TouchableOpacity onPress={deleted}>
            <AntDesign name="closecircle" size={20}/>
        </TouchableOpacity>
    </View>
);

const {width,height} = Dimensions.get('window'); 

const styles = StyleSheet.create({
    planContainer: {
        padding: 5,
        marginTop: 20,
        borderBottomWidth:1,
        width: width-40, 
    },
    planitem: {
        fontSize: 20,
    },
})