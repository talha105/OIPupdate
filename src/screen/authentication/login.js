import React, { useState } from "react";
import {View,Text,StyleSheet,Image, TextInput,TouchableOpacity, ScrollView} from "react-native";
import { RFPercentage} from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Button, CheckBox} from "native-base";
import * as actions from "../../store/actions"
import { connect } from "react-redux";
function Login({navigation,login}){
    const [fields,setFields]=useState({email:"",password:""})
    const [check,setCheck]=useState(false)
    function getValue(v,key){
        setFields((pS)=>{
            return {
                ...pS,
                [key]:v
            }
        })
    }
    function setCheckBox(){
        setCheck((pS)=>!pS)
    }
    return(
        <View style={styles.container}>
            <View style={styles.img}>
                <Image style={{width:wp('60%')}} source={require('../../../assets/images/logowt.png')}/>
            </View>
            <View style={styles.title}>
                <Text style={{...styles.simply}}>Simply</Text>
                <Text style={styles.smarter}>Work Smarter</Text>
            </View>
            <View style={styles.card}>
                <View style={styles.sec1}>
                    <View style={styles.p1}>
                        <Text style={styles.login}>Login</Text>
                        <Text style={styles.welcom}>Welcome back!</Text>
                    </View>
                    <View style={styles.p2}>
                        <TouchableOpacity onPress={()=>navigation.navigate('createacount')}>
                            <Text style={{fontFamily:'Poppins-Regular',color:'#001441'}}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.line}/>
                <View style={styles.sec2}>
                    <View style={styles.inputCon}>
                        <TextInput onChangeText={(v)=>getValue(v,"email")} style={styles.input} placeholder="Email"/>
                        <TextInput onChangeText={(v)=>getValue(v,"password")} style={styles.input} secureTextEntry placeholder="Password"/>
                    </View>
                    <View style={styles.sec3}>
                        <TouchableOpacity>
                                <Image style={{width:60,height:60,margin:12}} source={require('../../../assets/images/facebook.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                                <Image style={{width:60,height:60,margin:12}} source={require('../../../assets/images/google.png')}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.sec4}>
                        <View style={styles.chec}>
                            <CheckBox onPress={setCheckBox} style={{width:20,height:20,borderRadius:4}} checked={check}/>
                            <Text style={styles.rem}>Rembember me</Text>
                        </View>
                        <View style={styles.pasCon}>
                            <TouchableOpacity onPress={()=>navigation.navigate('forgetPassword')}>
                            <Text style={styles.fPass}>Forget Password ?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.sec5}>
                        <TouchableOpacity style={styles.loginBtn} onPress={()=>login()}>
                            <Text style={{fontSize:RFPercentage(2),color:'white',fontFamily:'Poppins-Regular'}}>Log In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FAFAFD',
        alignItems:'center',
        justifyContent:'space-around',
        paddingBottom:20,
    },
    img:{
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        justifyContent:'center',
        alignItems:'center'
    },
    card:{
        paddingBottom:RFPercentage(3),
        alignItems:'center',
        backgroundColor:'white',
        width:'90%',
        borderRadius:7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        
        elevation: 6,
            },
    sec1:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:'90%',
        height:90
    },
    p1:{
        width:'75%',
    },
    p2:{
        width:'25%',
        alignItems:'flex-end',
    },
    line:{
        backgroundColor:'#E2E9F0',
        width:'100%',
        height:1
    },
    simply:{
        fontSize:RFPercentage(4.5),
        color:'#001441',
        fontFamily:'Poppins-Bold'
    },
    smarter:{
        fontSize:RFPercentage(4.5),
        color:'#001441',
        fontFamily:'Poppins-Light'
    },
    login:{
        fontSize:RFPercentage(2.7),
        color:'#001441',
        fontFamily:'Poppins-Regular'
    },
    welcom:{
        fontSize:RFPercentage(2),
        fontFamily:'Poppins-Regular',
        color:'black'
    },
    sec2:{
        width:'90%',
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
    sec3:{
        flexDirection:'row',
        justifyContent:'center',
        width:'100%',
    },
    sec4:{
        height:35,
        flexDirection:'row',
        width:'100%',
        alignItems:'center'
    },
    chec:{
        flexDirection:'row',
        width:'60%',
        alignItems:'center'

    },
    rem:{
        fontSize:RFPercentage(1.8),
        fontFamily:'Poppins-Regular',
        marginLeft:20,
        color:'#778699'
    },
    fPass:{
        color:'#778699',
        fontSize:RFPercentage(1.8),
        fontFamily:'Poppins-Regular',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    pasCon:{
        width:'40%',
    },
    loginBtn:{
        backgroundColor:'#001441',
        borderRadius:7,
        width:'100%',
        height:40,
        justifyContent:'center',
        alignItems:'center'
    },
    sec5:{
        marginTop:5,
        width:'100%',
        justifyContent:"center",
        alignItems:'center'
    },
    
})
export default connect(null,actions)(Login);