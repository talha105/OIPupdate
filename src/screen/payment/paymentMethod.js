import React, { Component, useEffect, useState } from 'react';
import { View, Text,StyleSheet,Image,TextInput } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';
import Header from "../../component/header";
import { RFPercentage} from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import OipDatePicker from '../../component/oipDatePicker';

function PaymentMethod(){
    const [language,setLanguage]=useState({language: 'Credit Card'})
    return (
        <View style={{flex:1}}>
            <Header
            title="Payment Method"
            back="back"
            iconName="chevron-back"
            />
          <ScrollView>
                <View style={styles.con}>
                    <Text style={styles.title}>Card Details</Text>
                    <View style={styles.line}/>
                    <Text style={styles.paymentText}>Payment Method</Text>
                    <View style={styles.picker}>
                    <Picker
                    mode="dialog"
                    selectedValue={language.language}
                    dropdownIconColor="#71809C"
                    itemStyle={{color:'green'}}
                    style={{width:wp(90),height:hp(6)}}
                    onValueChange={(itemValue, itemIndex) =>
                        setLanguage({language: itemValue})
                    }>
                    <Picker.Item label="Credit Card" value="Credit Card" />
                    <Picker.Item label="Paypal" value="Paypal" />
                    </Picker>
                    </View>
                    {/* REMAINDER WILL CHANGE THROUGH DROP DOWN */}
                    <View>
                    <View>
                        <Image resizeMode="contain" style={{width:'100%',height:wp(70)}} source={require('../../../assets/images/card.png')}/>
                    </View>
                    <View>
                        <Text style={styles.inputTxt}>Name</Text>
                        <TextInput placeholder="Your Name" style={styles.input}/>
                        <Text style={styles.inputTxt}>Card Number</Text>
                        <TextInput style={styles.input}/>
                        <Text style={styles.inputTxt}>Expire Date</Text>
                        <View style={styles.lastCon}>
                            <OipDatePicker/>
                        </View>
                        <View style={{justifyContent:'center',alignItems:'center',marginTop:hp(2)}}>
                        <TouchableOpacity style={styles.payBtn}>
                                <Text style={styles.payBtnText}>PAY</Text>
                        </TouchableOpacity>
                        </View>
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
        borderTopLeftRadius:7,
        borderTopRightRadius:7,
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
    picker:{
        backgroundColor:'white',
        borderRadius:7,
        borderWidth:1,
        borderColor:'#D7E1EA'
    },
    input:{
        width:'100%',
        borderRadius:7,
        borderWidth:1,
        borderColor:'#DCE0E7',
        backgroundColor:'white',
        height:40,
        marginTop:10
    },
    inputTxt:{
        fontSize:RFPercentage(1.7),
        fontFamily:'Poppins-Regular',
        marginTop:5,
        color:'#71809C',
        width:'90%'
    },
    payBtn:{
        backgroundColor:'#001441',
        width:wp(70),
        height:40,
        borderRadius:6,
        justifyContent:'center',
        alignItems:'center'
    },
    payBtnText:{
        fontFamily:'Poppins-Regular',
        color:'white'
    },
    lastCon:{
        width:'100%',
        flexDirection:'row',
    },
    title:{
        marginTop:hp(3),
        fontFamily:'Poppins-SemiBold',
        fontSize:RFPercentage(3)
    },
    line:{
        height:1,
        backgroundColor:'#888A8E',
        marginTop:hp(2),
        marginBottom:hp(2)
    },
    paymentText:{
        fontFamily:'Poppins-Regular',
        fontSize:RFPercentage(1.7),
        color:'#72809D'
    }
})
export default PaymentMethod;