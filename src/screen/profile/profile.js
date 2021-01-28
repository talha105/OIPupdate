import React, { useEffect,useState } from 'react'
import { Text, View,Image,StyleSheet,TextInput,Animated, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { RFPercentage} from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import Header from "../../component/header"

const {height}=Dimensions.get('window')
function Profile(){
    const position=useState(new Animated.Value(height))[0];
    useEffect(()=>{
        Animated.timing(position,{
            toValue:0,
            duration:500,
            useNativeDriver:true
        }).start()
    })
    return (
        <View style={{flex:1}}>
            <Header title="Profile" iconName="md-menu"/>
            <Animated.View style={{...styles.container,transform:[{translateY:position}]}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.sec}>
                    <View style={styles.imgCon}>
                    <Image 
                    style={styles.proPic} 
                    source={require('../../../assets/images/thumb.png')}/>
                    </View>
                    <View style={styles.proDes}>
                        <Text style={styles.proDesText}>
                        About Me: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer
                        </Text>
                    </View>
                </View>
                <View style={{...styles.sec,marginTop:hp('2%')}}>
                    <View style={{...styles.fieldsCon,height:'auto'}}>
                        <View style={{...styles.content,marginTop:hp('2%'),marginBottom:hp('2%')}}>
                        <Text style={styles.proHead}>Profile Details</Text>
                        </View>
                        <View style={styles.line}/>
                        <View style={styles.content}>
                        <Text style={styles.inputTxt}>Name</Text>
                        <TextInput defaultValue="Samson Victor" style={styles.input}/>
                        <Text style={styles.inputTxt}>Email</Text>
                        <TextInput defaultValue="kalachakra@gmail.com" style={styles.input}/>
                        <Text style={styles.inputTxt}>Phone Number</Text>
                        <TextInput keyboardType="number-pad" defaultValue="+62811 2345 5432" style={styles.input}/>
                        <Text style={styles.inputTxt}>Phone Number</Text>
                        <TextInput 
                        numberOfLines={4}  
                        multiline={true}
                        defaultValue="Jl. Pisangan Baru Tengah V No.136, RT.9/RW.14, Pisangan Baru, Matraman, East Jakarta City, Jakarta 13130" 
                        style={{...styles.input,height:'auto',flexWrap:'wrap',textAlignVertical:'top'}}
                        />
                        </View>
                    </View>
                </View>
                </ScrollView>
            </Animated.View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        marginLeft:wp('1.5%'),
        marginRight:wp('1.5%'),
        marginTop:hp('1%'),
        paddingBottom:hp('2%'),
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
        position:'absolute',
        top:-40,
        elevation: 5
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
        fontSize:RFPercentage(2)
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
    content:{
        paddingRight:wp('5%'),
        paddingLeft:wp('5%'),
    }
})

export default Profile;
