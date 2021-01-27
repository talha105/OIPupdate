import React from "react";
import { View,Text ,StyleSheet,Image,TextInput,TouchableOpacity} from "react-native";
import { CheckBox } from "native-base";
import { createStore} from "redux";
import { RFPercentage} from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { ScrollView } from "react-native-gesture-handler";

function CreateAcount({navigation}){
    return(
        
        <View style={{flex:1, width:'100%'}}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
            <View style={styles.sec1}>
                <Image style={{width:147,height:55}} source={require('../../../assets/images/logowt.png')}/>
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
                        <TextInput style={styles.input}/>
                        <Text style={styles.inputTxt}>Email</Text>
                        <TextInput style={styles.input}/>
                        <Text style={styles.inputTxt}>Gender</Text>
                        <View style={styles.doubleInput}>
                                <View style={styles.chec}>
                                    <CheckBox style={{width:20,height:20,borderRadius:4}} checked={true}/>
                                    <Text style={styles.gender}>Male</Text>
                                </View>
                                <View style={styles.chec}>
                                    <CheckBox style={{width:20,height:20,borderRadius:4}} checked={false}/>
                                    <Text style={styles.gender}>Female</Text>
                                </View>
                        </View>
                        <View style={styles.doubleInput}>
                                <View style={{...styles.chec,width:'30%'}}>
                                    <TextInput placeholder="09" style={styles.gender}/>
                                </View>
                                <View style={{...styles.chec,width:'30%'}}>
                                    <TextInput placeholder="August" style={styles.gender}/>
                                </View>
                                <View style={{...styles.chec,width:'30%'}}>
                                    <TextInput placeholder="1986" style={styles.gender}/>
                                </View>
                        </View>
                        <View style={styles.sub}>
                                    <CheckBox style={{width:20,height:20,borderRadius:4}} checked={true}/>
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
        justifyContent:'center',
        width:'90%',
        marginTop:15,
        marginBottom:15,
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
    ,input:{
        width:'100%',
        borderRadius:7,
        borderWidth:1,
        borderColor:'#DCE0E7',
        backgroundColor:'white',
        height:40,
        marginTop:10
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
    }
})

export default CreateAcount;