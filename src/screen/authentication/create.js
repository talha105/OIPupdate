import React, { useState } from "react";
import { View,Text ,StyleSheet,Image,TextInput,TouchableOpacity} from "react-native";
import { Button, CheckBox } from "native-base";
import { createStore} from "redux";
import { RFPercentage} from "react-native-responsive-fontsize";
import DatePicker from 'react-native-date-picker';
import IconMenu from "react-native-vector-icons/Ionicons";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { ScrollView } from "react-native-gesture-handler";

function CreateAcount({navigation}){
    const [fields,setFields]=useState({
        userName:"",
        email:"",
        DOB:"",
        gender:"",
        date:new Date()
    });
    const [maleCheck,setMaleCheck]=useState(true);
    const [femaleCheck,setFemaleCheck]=useState(false);
    const [newsCheck,setNewsCheck]=useState(false);

    function getValue(v,key){
        setFields((pS)=>{
            return{
                ...pS,
                [key]:v
            }
        })
    }

    function getNews(){
        setNewsCheck((pS)=>!pS)
    }

    function getMale(){
        setFemaleCheck(false)
        setMaleCheck(true)
        setFields((pS)=>{
            return{
                ...pS,
                gender:"male"
            }
        })
    }
    function getFemale(){
        setMaleCheck(false)
        setFemaleCheck(true)
        setFields((pS)=>{
            return{
                ...pS,
                gender:"female"
            }
        })
    }
    return(
        
        <View style={{flex:1, width:'100%'}}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
            <View style={styles.sec1}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <IconMenu name="chevron-back" color="#001441" size={30}/>
                </TouchableOpacity>
                <Image resizeMode="contain" style={{width:147,height:57,marginLeft:wp('20')}} source={require('../../../assets/images/logowt.png')}/>
            </View>
            <View style={styles.sec2}>
                <Text style={styles.title}>Create Account</Text>
                <Text style={styles.res}>Register</Text>
                <View style={styles.line}/>
            </View>
            <View style={styles.sec3}>
                <View style={styles.card}>
                    <View>
                        <View style={styles.top}>
                        <Text style={styles.resH}>Register</Text>
                        <Text style={{fontFamily:'Poppins-Regular'}}>Fill the form, make sure it correct</Text>
                        </View>
                        <View style={styles.fLine}/>
                    </View>
                    <View style={styles.p2}>
                        <Text style={styles.inputTxt}>UserName</Text>
                        <TextInput onChangeText={(v)=>getValue(v,"userName")} style={styles.input}/>
                        <Text style={styles.inputTxt}>Email</Text>
                        <TextInput onChangeText={(v)=>getValue(v,"email")} style={styles.input}/>
                        <Text style={styles.inputTxt}>Gender</Text>
                        <View style={styles.doubleInput}>
                                <View style={styles.chec}>
                                    <CheckBox onPress={getMale} style={{width:20,height:20,borderRadius:4}} checked={maleCheck}/>
                                    <Text style={styles.gender}>Male</Text>
                                </View>
                                <View style={styles.chec}>
                                    <CheckBox onPress={getFemale} style={{width:20,height:20,borderRadius:4}} checked={femaleCheck}/>
                                    <Text style={styles.gender}>Female</Text>
                                </View>
                        </View>
                        <Text style={styles.inputTxt}>Date of Birth</Text>
                        <View style={styles.doubleInput}>
                            <View style={styles.dateCon}>
                                <DatePicker
                                textColor={'#71809C'}
                                dividerHeight={0}
                                style={{height:70}}
                                date={fields.date}
                                mode="date"
                                onDateChange={(d)=>getValue(d,"date")}
                                />
                            </View>
                        </View>
                        <View style={styles.sub}>
                                    <CheckBox onPress={getNews} style={{width:20,height:20,borderRadius:4}} checked={newsCheck}/>
                                    <Text style={styles.gender}>Newsletter Subsribe</Text>
                        </View>
                        <View style={styles.loginV}>
                            <TouchableOpacity style={styles.loginBtn} onPress={()=>navigation.navigate('createPassword')}>
                                <Text style={{fontSize:RFPercentage(2),fontFamily:'Poppins-Regular',color:'white'}}>Registration</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.footer}>
                            <Text style={{textAlign:'center',fontFamily:'Poppins-Regular',fontSize:RFPercentage(1.7)}}>
                            By creating this account, you agree with our 
                            {"\n"}<Text style={styles.term}>Terms & Conditions</Text></Text>
                        </View>
                    </View>
                </View>
            </View>
            </View>
            </ScrollView>
        </View>
        
    )
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'flex-start',
        paddingBottom:20
    },
    sec1:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        width:'90%',
        marginTop:hp(3),
        marginBottom:hp(3),
        marginLeft:21
    },
    sec2:{
        width:'90%',
        flex:1,
        justifyContent:'flex-start',
        marginLeft:21
    },
    sec3:{
        width:'100%',
        flex:5,
        alignItems:'center'
    },
    title:{
        color:'#253F50',
        fontFamily:'Poppins-Regular',
        fontSize:RFPercentage(3.5)
    },
    line:{
        width:wp('25%'),
        marginTop:hp('1'),
        marginBottom:hp('2'),
        height:2,
        backgroundColor:'#29BCFF',
    },
    res:{
        color:'#001441',
        fontFamily:'Poppins-Regular',
        fontSize:RFPercentage('2')
    },
    card:{
        width:'90%',
        flex:1,
        backgroundColor:'white',
        width:'90%',
        borderRadius:7,
        paddingBottom:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        
        elevation: 6,
            },
    resH:{
        color:'#001441',
        fontSize:RFPercentage(3),
        fontFamily:'Poppins-Regular'
    },
    fLine:{
        marginTop:10,
        backgroundColor:'#E2E9F0',
        width:'100%',
        height:1
    }
    ,
    input:{
        width:'90%',
        borderRadius:7,
        borderWidth:1,
        borderColor:'#DCE0E7',
        backgroundColor:'white',
        height:40,
        marginTop:10
    },
    top:{
        paddingLeft:20,
        paddingTop:14,
        paddingBottom:8
    },
    p2:{
        alignItems:'center'
    },
    inputTxt:{
        fontSize:RFPercentage(1.7),
        fontFamily:'Poppins-Regular',
        marginTop:10,
        color:'#71809C',
        width:'90%'
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
    gender:{
        marginLeft:20,
        fontFamily:"Poppins-Regular",
        color:'#253F50'
    },
    sub:{
        width:'90%',
        height:50,
        flexDirection:'row',
        alignItems:'center'
    },
    loginBtn:{
        backgroundColor:'#001441',
        borderRadius:7,
        width:'100%',
        height:40,
        justifyContent:'center',
        alignItems:'center'
    },
    loginV:{
        width:'90%'
    },
    footer:{
        height:50,
        flexDirection:'row',
        width:'90%',
        justifyContent:'center',
        alignItems:'center'
    },
    term:{
        color:'#001441',
    },
    dateCon:{
        width:'100%',
        marginTop:hp(1.5),
        marginBottom:hp(1.5),
        padding:5,
        borderWidth:1,
        borderColor:'#DCE0E7',
        borderRadius:7
    }
})

export default CreateAcount;