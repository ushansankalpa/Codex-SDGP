import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function FlatButton(){
    <TouchableOpacity >
        <View style={style.button}>
            <Text style={style.buttonText}>submit</Text>
        </View>
    </TouchableOpacity>
}

const style = StyleSheet.create({
    button:{
        borderRadius:10,
        paddingVertical:14,
        paddingHorizontal:10,
        backgroundColor:'red',

    },

    buttonText:{
        color:'white',
        fontWeight:'bold',
        textTransform:'uppercase',
        fontSize:16,
        textAlign:'center',
    }
})