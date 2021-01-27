import React from "react";
import { View,Text ,StyleSheet,Image,TextInput,TouchableOpacity} from "react-native";
import { CheckBox } from "native-base";
import Icon from "react-native-vector-icons/EvilIcons"
import { connect } from "react-redux";
import * as actions from "../../store/actions"
import { RFPercentage} from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

function ForgetPassword({login}){
    return(
        <View style={styles.container}>
            <View style={styles.sec1}>
                <Image style={{width:144,height:54}} source={require('../../../assets/images/logowt.png')}/>
            </View>
            <View style={styles.sec2}>
                <Text style={styles.title}>Create Password</Text>
                <Text style={styles.res}>Create Password</Text>
                <View style={styles.line}/>
            </View>
            <View style={styles.sec3}>
                <View style={styles.card}>
                    <View>
                        <View style={styles.top}>
                        <View style={styles.icon}>
                            <Icon name="lock" size={30} color="#ffffff"/>
                        </View>
                        <View style={{marginLeft:17}}>
                        <Text style={styles.resH}>Create New Password</Text>
                        <Text style={{fontFamily:'Poppins-Regular'}}>Don't Worry!</Text>
                        </View>
                        </View>
                        <View style={styles.fLine}/>
                    </View>
                    <View style={styles.p2}>
                    <View style={styles.p1}>
                        <Text style={{fontFamily:'Poppins-Regular',}}>
                        Please Input your registrations email, and check your email constantly.
                        </Text>
                    </View>
                        <Text style={styles.inputTxt}>New Password</Text>
                        <TextInput style={styles.input} secureTextEntry/>
                        <Text style={styles.inputTxt}>One more time please</Text>
                        <TextInput style={styles.input} secureTextEntry/>
                        <View style={styles.loginV}>
                            <TouchableOpacity style={styles.loginBtn} onPress={()=>login()}>
                                <Text style={{fontSize:RFPercentage(2),color:'white',fontFamily:'Poppins-Regular'}}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'flex-start',
        paddingBottom:20,
        backgroundColor:'white'
    },
    sec1:{
        flex:1,
        justifyContent:'center',
        width:'90%',
        marginLeft:21
    },
    sec2:{
        width:'90%',
        flex:0.8,
        justifyContent:'flex-start',
        marginLeft:21
    },
    sec3:{
        width:'100%',
        flex:4,
        alignItems:'center'
    },
    title:{
        color:'#253F50',
        fontFamily:'Poppins-Regular',
        fontSize:RFPercentage(3.5)
    },
    line:{
        width:wp('35%'),
        marginTop:hp('1'),
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
        backgroundColor:'white',
        width:'90%',
        borderRadius:7,
        shadowColor: "#000",
        paddingBottom:20,
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
    },
    input:{
        width:'90%',
        borderRadius:7,
        borderWidth:1,
        borderColor:'#DCE0E7',
        backgroundColor:'white',
        height:48,
        marginTop:10
    },
    top:{
        paddingLeft:20,
        paddingTop:14,
        paddingBottom:8,
        flexDirection:'row',
        alignItems:'center'
    },
    p1:{
        alignItems:'center',
        width:'90%',
        justifyContent:'center',
        height:90
    },
    p2:{
        alignItems:'center'
    },
    inputTxt:{
        marginTop:10,
        color:'#71809C',
        fontSize:RFPercentage(1.7),
        fontFamily:'Poppins-Regular',
        width:'90%'
    },
    loginBtn:{
        backgroundColor:'#001441',
        borderRadius:7,
        width:'100%',
        height:48,
        justifyContent:'center',
        alignItems:'center'
    },
    loginV:{
        marginTop:20,
        width:'90%'
    },
    term:{
        color:'#001441'
    },
    icon:{
        backgroundColor:'#001441',
        height:50,
        width:50,
        borderRadius:50/2,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default connect(null,actions)(ForgetPassword);