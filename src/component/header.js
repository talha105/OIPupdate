import React, { Component } from 'react'
import { Text, View,StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import IconMenu from "react-native-vector-icons/Ionicons"
function Header({title,iconName,back}){
    const navigation = useNavigation();
    return (
        <>
            <View style={styles.Header}>
                <TouchableOpacity onPress={()=>{
                    back?navigation.goBack():navigation.openDrawer()
                }}>
                <View style={{marginLeft:15}}>
                    <IconMenu name={iconName} color="#001441" size={30}/>
                </View>
                </TouchableOpacity>
                <Text style={styles.title}> {title} </Text>
                <View style={{width:30}}/>
            </View>
        </>
    )
}

const styles=StyleSheet.create({
    Header:{
        height: 62,
        width: '100%',
        flexDirection:'row',
        backgroundColor:'white',
        justifyContent:'space-between',
        alignItems:'center'
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:'#222222'
    }
})


export default Header;
