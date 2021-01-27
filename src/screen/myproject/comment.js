import React, { Component } from 'react';
import { View, Text ,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import Header from "../../component/header";
import { RFPercentage} from "react-native-responsive-fontsize";
import IconPlus from "react-native-vector-icons/AntDesign"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { ScrollView } from 'react-native-gesture-handler';

function Comment(){
    return (
        <View>
        <Header title="Comment" back="back" iconName="chevron-back"/>
        <ScrollView>
          <View style={styles.con}>
                        <View style={{...styles.content,marginTop:hp('2%'),marginBottom:hp('2%')}}>
                        <Text style={styles.proHead}>Add New Comment</Text>
                        <Text style={{fontFamily:'Poppins-Regular',color:'#606C83'}}>Add New Comment</Text>
                        </View>
                        <View style={styles.line}/>
                        <View style={styles.content}>
                        <Text style={styles.inputTxt}>Project Name</Text>
                        <TextInput defaultValue="Website Design" style={styles.input}/>
                        <Text style={styles.inputTxt}>Description</Text>
                        <TextInput 
                        numberOfLines={3}  
                        multiline={true}
                        defaultValue="Message" 
                        style={{...styles.input,height:'auto',flexWrap:'wrap',textAlignVertical:'top'}}
                        />
                        <Text style={styles.inputTxt}>Upload Files</Text>
                        <View style={styles.imgCon}>
                            <TouchableOpacity>
                                    <IconPlus name="pluscircle" color="#29BCFF" size={30}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{justifyContent:'center',alignItems:'center',marginTop:15,marginBottom:15}}>
                            <TouchableOpacity style={styles.btn}>
                                    <Text style={styles.btnTitle}>Upload</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
      );
}

const styles=StyleSheet.create({
    con:{
        paddingLeft:15,
        paddingRight:15,
        paddingBottom:15,
        marginLeft:5,
        marginRight:5,
        marginTop:10,
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
    proDes:{
        width:'95%',
        marginRight:wp('2%'),
        marginLeft:wp('2%'),
        paddingBottom:hp('2%'),
        justifyContent:'flex-end',
        backgroundColor:'white',
        shadowColor: "#000",
        borderRadius:10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        height:hp('20%'),
        elevation: 4,
    },
    proDesText:{
        fontFamily:'Inter-Regular',
        color:'#72809D',
        fontSize:RFPercentage(2),
        textAlign:'center'
    },
    proPic:{
        width:wp('22%'),
        height:wp('22%'),
        borderWidth:wp('1.5%'),
        borderColor:'white',
        borderRadius:wp('22%')/2
        
    },
    imgCon:{
        width:'100%',
        backgroundColor:'white',
        height:hp('18%'),
        borderRadius:7,
        justifyContent:'center',
        alignItems:'center'
    },
    sec:{
        alignItems:'center',
        marginTop:hp('7%'),
    },
    fieldsCon:{
        width:'95%',
        marginRight:wp('2%'),
        marginLeft:wp('2%'),
        paddingBottom:hp('2%'),
        backgroundColor:'white',
        shadowColor: "#000",
        borderRadius:10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        height:hp('20%'),
        elevation: 4,
    },
    proHead:{
        color:'#001441',
        fontFamily:'Poppins-Light',
        fontSize:RFPercentage(3)
    },
    line:{
        height:2,
        backgroundColor:'#EDEEF2',
        width:'100%'
    },input:{
        width:'100%',
        borderRadius:7,
        borderWidth:1,
        borderColor:'#DCE0E7',
        backgroundColor:'white',
        height:40,
        marginTop:10,
        color:'#606C83'
    },
    inputTxt:{
        marginTop:10,
        color:'#606C83',
        fontSize:RFPercentage(1.8),
        fontFamily:'Poppins-Light',
        width:'90%'
    },
    btn:{
        backgroundColor:'#001441',
        borderRadius:8,
        height:28,
        width:'45%',
        justifyContent:'center',
        alignItems:'center'
    },
    btnTitle:{
        color:'white',
        fontSize:RFPercentage(2),
        fontFamily:'Poppins-Regular',

    }
})

export default Comment;