import React, { Component, useEffect, useState } from 'react'
import { Text, View ,StyleSheet,TextInput,TouchableOpacity,Dimensions,Animated} from 'react-native'
import {CheckBox} from "native-base"
import { ScrollView } from 'react-native-gesture-handler';
import Header from "../../component/header";
import IconDate from "react-native-vector-icons/Fontisto"
import IconPlus from "react-native-vector-icons/AntDesign"
import Icon from 'react-native-vector-icons/Fontisto';

const {height}=Dimensions.get('window');

function CreateProject(){
    const position=useState(new Animated.Value(height))[0];
    useEffect(()=>{
        Animated.timing(position,{
            toValue:0,
            duration:500,
            useNativeDriver:true
        }).start()
    })
    return (
        
        <View style={styles.mainDiv}>
            <Header iconName="md-menu" title="Create Project"/>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingLeft:5,paddingRight:5}}>
            <Animated.View style={{...styles.container,transform:[{translateY:position}]}}>
                <View style={styles.titleCon}>
                    <Text style={styles.title}>Create New Project</Text>
                    <Text style={styles.subTitle}>Now you're a part of us.</Text>
                </View>
                <View style={styles.line}/>
                <View style={styles.fieldsCon}>
                        <Text style={styles.inputTxt}>Project Name</Text>
                        <TextInput style={styles.input}/>
                        <Text style={styles.inputTxt}>Budget</Text>
                        <TextInput style={styles.input}/>
                        <Text style={styles.inputTxt}>Start & Due Date</Text>
                        <View style={styles.doubleInput}>
                    <View style={styles.chec}>
                        <Icon name="date" style={styles.dateIcon} color="#7F8FA4" size={20}/>
                        <Text style={styles.gender}>12/20/2020</Text>
                    </View>
                    <View style={styles.chec}>
                        <Icon name="date" style={styles.dateIcon} color="#7F8FA4" size={20}/>
                        <Text style={styles.gender}>12/20/2020</Text>
                    </View>
                </View>
                <Text style={styles.inputTxt}>Description</Text>
                <TextInput 
                style={{...styles.input,height:80}}
                textAlignVertical="top"
                placeholder="Message"
                multiline={true}
                numberOfLines={8}
                />
                <Text style={styles.inputTxt}>Uplaod Files</Text>
                 {/* REMAINDER will render condition here */}
                <View style={styles.uploadFile}>
                    <TouchableOpacity activeOpacity={0.7}>
                        <IconPlus name="pluscircle" color="#29BCFF" size={20}/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity activeOpacity={0.7} style={styles.uploadBtnCon}>
                    <Text style={styles.uploadBtn}>
                        Upload
                    </Text>
                </TouchableOpacity>
                </View>
            </Animated.View>
            </ScrollView>
        </View>
    )
}

const styles=StyleSheet.create({
    mainDiv:{
        flex:1,
        alignItems:'center',
        width:'100%',
    },
    container:{
        flex:1,
        paddingBottom:10,
        marginTop:10,
        marginBottom:10,
        width:'100%',
        borderRadius:7,
        backgroundColor:'#F2F2F2',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    title:{
        color:'#001441',
        fontSize:24,
        fontWeight:'bold',
        fontFamily:'PoppinsBlack'
    },
    titleCon:{
        padding:10
    },
    subTitle:{
        color:'#606C83',
        fontSize:14
    },
    line:{
        backgroundColor:'#D9D9D9',
        height:1,
        width:'100%'
    },
    chec:{
        flexDirection:'row',
        width:'45%',
        alignItems:'center',
        borderRadius:7,
        borderWidth:1,
        borderColor:'#DCE0E7',
        backgroundColor:'white',
        height:40,
        marginTop:10

    },
    doubleInput:{
        width:'90%',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    sub:{
        width:'90%',
        height:50,
        flexDirection:'row',
        alignItems:'center'
    },
    inputTxt:{
        marginTop:10,
        color:'#71809C',
        fontSize:12,
        width:'90%'
    },
    input:{
        width:'90%',
        borderRadius:7,
        borderWidth:1,
        borderColor:'#DCE0E7',
        backgroundColor:'white',
        height:40,
        marginTop:10
    },
    fieldsCon:{
        alignItems:'center'
    },
    gender:{
        color:'#001441',
        fontWeight:'bold'
    },
    dateIcon:{
        marginLeft:8,
        marginRight:8
    },
    uploadFile:{
        height: 132,
        backgroundColor:'white',
        width:'90%',
        borderRadius:7,
        marginTop:10,
        justifyContent:'center',
        alignItems:'center'
    },
    uploadBtn:{
        width:150,
        height: 30,
        backgroundColor:"#001441",
        color:'white',
        textAlign:'center',
        textAlignVertical:'center',
        borderRadius:8
    },
    uploadBtnCon:{
        marginTop:15
    }
})

export default CreateProject;
