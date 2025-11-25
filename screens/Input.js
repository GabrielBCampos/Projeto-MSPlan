import { View, Text, TextInput, Keyboard } from "react-native";
import React from "react";

const Input = ({title, placeholder, Keyboard, is_password}) => {
    return(
       <View style={{marginVertical: 10}}>
            <Text style={{fontSize:16, color: '#03bafc'}}>{title}</Text>
            <TextInput placeholder= {placeholder} placeholderTextColor='gray' style={{borderBottomColor: "#03bafc", borderBottomWidth: 1, paddingVertical: 0, marginTop: 5}} 
            secureTextEntry={is_password}
            keyboardType={Keyboard} 
            />
        </View>
    )
}