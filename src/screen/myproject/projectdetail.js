import React, { useState,useEffect } from 'react'
import { Text, View ,StyleSheet,ScrollView,Dimensions,Image,Animated, TouchableOpacity} from 'react-native'
import Header from "../../component/header"
import IconDate from "react-native-vector-icons/Fontisto"
import IconPlus from "react-native-vector-icons/AntDesign"
import IconImage from "react-native-vector-icons/Entypo"

const {width,height}=Dimensions.get('window')

function ProjectDetail({navigation}) {
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
            <Header title="My Projects" back="back" iconName="chevron-back"/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Animated.View style={{transform:[{translateY:position}]}}>
                <View style={styles.con}>
                    <Text style={styles.title}> Logo Design</Text>
                    <View style={styles.sec1}>
                        <View style={styles.dateCon}>
                            <IconDate name="date" color="#71809C" size={20}/>
                            <Text style={styles.date}>21-01-2021</Text>
                        </View>
                        <View>
                            <Text style={styles.amount}>$ 15,000</Text>
                        </View>
                    </View>
                    <View style={styles.line}/>
                    <Text style={{...styles.desTitle,marginTop:10}}>Description</Text>
                    <Text style={styles.desDetail}>
                        Communicate clear deadlines and 
                        expectations, and keep everyone on your 
                        team aligned and motivated.
                    </Text>
                    <View style={{...styles.sec1,marginTop:15}}>
                        <Text style={styles.desTitle}>Document</Text>
                        <Text style={styles.date}>21-01-2021</Text>
                    </View>
                    <View style={styles.line}/>
                    <View style={styles.images}>
                        <View style={styles.img}>
                            <TouchableOpacity>
                                <IconPlus name="pluscircle" color="#29BCFF" size={30}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.img}>
                            <IconImage name="image" color="white" size={60}/>
                        </View>
                        <View style={styles.img}>
                            <IconImage name="image" color="white" size={60}/>
                        </View>
                        <View style={styles.img}>
                            <IconImage name="image" color="white" size={60}/>
                        </View>
                    </View>
                    <View style={{...styles.sec1,marginTop:15,marginBottom:15}}>
                        <Text style={styles.desTitle}>Assigned To:</Text>
                        <Text style={styles.date}>21-01-2021</Text>
                    </View>
                    <View style={styles.proCon}>
                        <View>
                            <Image style={{width:50,height:50}} source={require('../../../assets/images/avator.png')}/>
                        </View>
                        <View style={{marginLeft:10}}>
                            <Text style={styles.proName}>Tonny Stark</Text>
                            <Text style={styles.proSubTitle}>Project Manager</Text>
                        </View>
                    </View>
                    <Text style={{...styles.desTitle,marginTop:15,marginBottom:15}}>Project Status:</Text>
                    <View style={styles.fieldBox}>
                        <Text style={styles.desTitle}>In Process</Text>
                    </View>
                </View>
                <View style={{justifyContent:'center',alignItems:'center',marginTop:15,marginBottom:15}}>
                    <TouchableOpacity  style={styles.btn} onPress={()=>navigation.navigate('comment')}>
                            <Text style={styles.btnTitle}>Add New Comment</Text>
                    </TouchableOpacity >
                </View>
                </Animated.View>
            </ScrollView>
        </View>
    )
}
const styles=StyleSheet.create({
    con:{
        paddingLeft:15,
        paddingRight:15,
        paddingTop:10,
        paddingBottom:10,
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
    title:{
        color:'#001441',
        fontSize:24,
        fontFamily:'Poppins-Bold'
    },
    date:{
        color:'#606C83',
        fontSize:13.5,
        fontFamily:'Poppins-Regular',
        marginLeft:10
    },
    dateCon:{
        flexDirection:'row',
        alignItems:'center'
    },
    amount:{
        color:'#222222',
        fontSize:21,
        fontFamily:'Poppins-Medium'
    },
    sec1:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:5,
        paddingRight:5
    },
    line:{
        width:'100%',
        height:1,
        backgroundColor:'#EDEEF2',
        marginTop:15,
        marginBottom:15
    },
    desTitle:{
        color:'#001441',
        fontSize:18.5,
        fontFamily:'Poppins-Regular',
    },
    desDetail:{
        color:'#72809D',
        fontSize:18.5
    },
    img:{
        width:'42%',
        backgroundColor: '#E1EAF1',
        borderRadius:7,
        height:124,
        margin:5,
        justifyContent:'center',
        alignItems:'center'
    },
    images:{
        width:'100%',
        justifyContent:'center',
        flexDirection:'row',
        flexWrap:'wrap',
    },
    proName:{
        color:'#35425B',
        fontSize:18.5,
        fontFamily:'Poppins-Regular',
    },
    proSubTitle:{
        color:'#72809E',
        fontSize:13,
        fontFamily:'Poppins-Regular',
    },
    proCon:{
        flexDirection:'row'
    },
    fieldBox:{
        backgroundColor:'white',
        paddingLeft:20,
        borderRadius:6,
        justifyContent:'center',
        height:40,
        marginBottom:15
    },
    btn:{
        backgroundColor:'#001441',
        borderRadius:8,
        height:48,
        width:'90%',
        justifyContent:'center',
        alignItems:'center'
    },
    btnTitle:{
        color:'white',
        fontSize:18.5,
        fontFamily:'Poppins-Regular',

    }
})
export default ProjectDetail;
