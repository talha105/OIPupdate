import React, { Component } from 'react'
import { View ,StyleSheet,Image, TouchableOpacity, Touchable} from 'react-native'
import { Button, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import IconCross from 'react-native-vector-icons/Entypo';
import IconDashboard from "react-native-vector-icons/MaterialIcons"
import IconProject from "react-native-vector-icons/SimpleLineIcons"
import IconCreateProject from "react-native-vector-icons/FontAwesome"
import IconProfile from "react-native-vector-icons/AntDesign"
import { RFPercentage} from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {connect} from "react-redux"
import * as actions from "../store/actions"


function DrawerContent({navigation,logOut}){
    return (
        <View style={styles.container}>
            <View style={styles.sec1}>
                <View style={{width:'100%'}}>
                <View style={styles.iconCon}>
                    <TouchableOpacity activeOpacity={0.7} onPress={()=>navigation.closeDrawer()}>
                    <IconCross style={styles.icon} name="cross" color="#AAAAAA" size={30}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.pro}>
                <Image resizeMode="contain" style={{width:wp(20),height:wp(20),borderRadius:90/2,marginBottom:hp(1.5)}} source={require('../../assets/images/thumb.png')}/>
                <Text style={styles.proName}>Bradley Edmur</Text>
                <Text style={styles.title}>Client</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('profile')}>
                    <Text style={styles.btn}>
                        Edit
                    </Text>
                </TouchableOpacity>
                </View>
                </View>
            </View>
            <View style={styles.sec2}>
            <LinearGradient colors={['#FFFFFF', '#DDE0E7']} style={styles.linearGradient}>
            <View style={styles.list}>
            <ListItem icon style={styles.listItem} onPress={()=>navigation.navigate('dashboard')}>
                <Left>
                    <IconDashboard name="dashboard" size={28} color="#001441"/>
                </Left>
                <Body>
                <Text>DASHBOARD</Text>
                </Body>
            </ListItem>
            <ListItem icon style={styles.listItem} onPress={()=>navigation.navigate('createproject')}>
                <Left>
                    <IconProject name="note" size={27} color="#001441"/>
                </Left>
                <Body>
                <Text>NEW PROJECT</Text>
                </Body>
            </ListItem>
            <ListItem icon style={styles.listItem} onPress={()=>navigation.navigate('myproject')}>
                <Left>
                    <IconCreateProject name="plus-square-o" size={30} color="#001441"/>
                </Left>
                <Body>
                <Text>MY PROJECT</Text>
                </Body>
            </ListItem >
            <ListItem icon style={styles.listItem} onPress={()=>navigation.navigate('payment')}>
                <Left>
                    <IconDashboard name="payment" size={28} color="#001441"/>
                </Left>
                <Body>
                <Text>PAYMENTS</Text>
                </Body>
            </ListItem>
            <ListItem icon style={styles.listItem} onPress={()=>navigation.navigate('support')}>
                <Left>
                    <IconDashboard name="support-agent" size={28} color="#001441"/>
                </Left>
                <Body>
                <Text>CLIENT SUPPORT</Text>
                </Body>
            </ListItem>
            <ListItem icon style={styles.listItem} onPress={()=>logOut()}>
                <Left>
                    <IconProfile name="logout" size={28} color="#001441"/>
                </Left>
                <Body>
                <Text>LOGOUT</Text>
                </Body>
            </ListItem>
            </View>
            </LinearGradient>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    sec1:{
        flex:2,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#EEEEEE',
    },
    sec2:{
        flex:3,
        paddingTop:20,
        width:'100%',
    },
    list:{
        paddingLeft:20,
        paddingRight:20
    },
    iconCon:{
        width:'100%',
        alignItems:'flex-end',
    },
    icon:{
        marginRight:wp(6),
    },
    pro:{
        width:'100%',
        alignItems:'center'
    },
    proName:{
        color:'#222222',
        fontSize:25
    },
    title:{
        color:'#222222',
        fontSize:18,
        marginTop:hp(1),
        marginBottom:hp(1.7)
    },
    btn:{
        height:35,
        width:80,
        backgroundColor:'#001441',
        borderRadius:7,
        textAlignVertical:'center',
        textAlign:'center',
        color:'white'
    },
    listItem:{
        paddingTop:10,
        paddingBottom:10
    },
    linearGradient: {
        flex: 1,
      },
})
export default connect(null,actions)(DrawerContent)