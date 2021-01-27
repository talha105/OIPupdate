import React, { useEffect, useState } from "react";
import {View,Text,StyleSheet,Dimensions,FlatList,TouchableOpacity,Animated} from "react-native";
import Header from "../../component/header"
import * as Progress from 'react-native-progress';
import Pie from 'react-native-pie'
import { useNavigation } from '@react-navigation/native';
import { RFPercentage } from "react-native-responsive-fontsize";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
const {height,width}=Dimensions.get('window');


function Dashboard(){
    const navigation=useNavigation();
      const position=useState(new Animated.Value(height/2))[0];

      useEffect(()=>{
          Animated.timing(position,{
              toValue:0,
              duration:500,
              useNativeDriver:true
          }).start()
      })
      const FlatData=[
          {
              projectName:'Project Name',
              payment:'$ 1,500',
              date:'15-01-2021'
          },
          {
            projectName:'Project Name',
            payment:'$ 1,500',
            date:'15-01-2021'
        },
        {
          projectName:'Project Name',
          payment:'$ 1,500',
          date:'15-01-2021'
      },
      {
        projectName:'Project Name',
        payment:'$ 1,500',
        date:'15-01-2021'
    }
      ]
      const renderDuePayment=({item})=>{
          return(
                <View>
                <View style={styles.payItem}>
                    <View>
                    <Text style={styles.proName}>{item.projectName}</Text>
                    <Text style={styles.date}>In Progress --- {item.date}</Text>
                    <Text style={{...styles.proName,color:'#222222',fontFamily:'Poppins-Regular'}}>{item.payment}</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.payBtn} onPress={()=>navigation.navigate('paynow')}>
                            <Text style={{color:'white'}}>Pay Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{width:'100%',alignItems:'center'}}>
                <View style={styles.itemLine}/>
                </View>
                </View>
          )
      }
    return(
        <View style={styles.container}>
            <Header
            title="Dashboard"
            iconName="md-menu"
            />
            <View style={styles.sec1}>
                <Text style={styles.title}>PROJECT STAGES</Text>
                <View style={styles.chartSec}>
                <View style={styles.chart}>
                <Pie
                radius={hp(13)}
                innerRadius={hp(7)}
                sections={[
                    {
                    percentage: 20,
                    color: '#FEA735',
                    },
                    {
                    percentage: 20,
                    color: '#018078',
                    },
                    {
                    percentage: 30,
                    color: '#7F9BFC',
                    },
                    {
                    percentage: 30,
                    color: '#5ED2CF',
                    },
                ]}
                strokeCap={'butt'}
                />
                <View
                style={styles.gauge}
              >
                <Text
                  style={styles.gaugeText}
                >
                  76%
                </Text>
              </View>
                </View>
                <View>
                    <View style={styles.chartInfoItem}>
                        <View style={{...styles.chartInfoItemText,backgroundColor:'#FE9B47'}}/>
                        <Text style={styles.chartInfoItemContent}>In - Progress</Text>
                    </View>
                    <View style={styles.chartInfoItem}>
                        <View style={{...styles.chartInfoItemText,backgroundColor:'#018078'}}/>
                        <Text style={styles.chartInfoItemContent}>Proposal</Text>
                    </View>
                    <View style={styles.chartInfoItem}>
                        <View style={{...styles.chartInfoItemText,backgroundColor:'#00A5DF'}}/>
                        <Text style={styles.chartInfoItemContent}>Final Delivery</Text>
                    </View>
                    <View style={styles.chartInfoItem}>
                        <View style={{...styles.chartInfoItemText,backgroundColor:'#5ED2CF'}}/>
                        <Text style={styles.chartInfoItemContent}>Initial Delivery</Text>
                    </View>
                    
                </View>
                </View>
                <View>
                    <View style={{width:'90%',justifyContent:'center',paddingBottom:5,paddingTop:5}}>
                    <Progress.Bar color={'#29BCFF'} width={300} progress={0.76} size={100} />
                    </View>
                    <View style={styles.pCon}>
                        <View style={styles.complete}>
                            <View style={styles.ball}/>
                            <View>
                                <Text style={{fontFamily:'Poppins-Regular'}}>76</Text>
                                <Text style={{color:'#222222',fontFamily:'Poppins-Regular',color:'#8A8A8A'}}>Complete</Text>
                            </View>
                        </View>
                        <View style={styles.line}/>
                        <View style={styles.complete}>
                            <View style={{...styles.ball,backgroundColor:'#D10000'}}/>
                            <View>
                                <Text style={{fontFamily:'Poppins-Regular'}}>24</Text>
                                <Text style={{color:'#222222',fontFamily:'Poppins-Regular',color:'#8A8A8A'}}>Pending</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <Animated.View style={{...styles.sec2,transform:[{translateY:position}]}}>
                <View>
                    <Text style={styles.duePay}>Payment Due</Text>
                </View>
                <FlatList
                style={{paddingRight:15,paddingLeft:15}}
                showsVerticalScrollIndicator={false}
                data={FlatData}
                renderItem={renderDuePayment}
                keyExtractor={(item,i)=>i.toString()}
                />
                
            </Animated.View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        alignItems:'center',
        flex:1,
    },
    sec1:{
        flex:3,
        alignItems:'center',
        backgroundColor:'#F2F2F2',
        width:'95%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
        borderRadius:7,
        justifyContent:'flex-start'
    },
    chartSec:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginBottom:10,
    },
    gauge: {
        position: 'absolute',
        width: wp(52),
        height: hp(27),
        alignItems: 'center',
        justifyContent: 'center',
      },
      gaugeText: {
        backgroundColor: 'transparent',
        color: '#001441',
        fontSize: RFPercentage(4),
        fontFamily:'Poppins-Bold'
      },
    sec2:{
        flex:2,
        backgroundColor:'#F2F2F2',
        width:'95%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
        marginTop:5
    },
    title:{
        fontSize:RFPercentage(3),
        color:'#001441',
        fontFamily:'Poppins-Bold',
        height: hp(7),
        textAlignVertical:'center'
    },
    ball:{
        height:28,
        width:28,
        borderRadius:28/2,
        backgroundColor:'#229500',
        marginRight:10
    },
    complete:{
        flexDirection:'row',
        alignItems:'center'
    },
    line:{
        width:2,
        height:40,
        backgroundColor:'#DDDDDD',
        marginRight:40,
        marginLeft:40
    },
    pCon:{
        flexDirection:'row',
        justifyContent:'center'
    },
    prog:{
        width:(width/2)*1.5,
        height:2,
        backgroundColor:'#DDDDDD',
        marginTop:20,
        marginBottom:20
    },
    payItem:{
        width:'100%',
        backgroundColor:'white',
        borderRadius:7,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-end',
        padding:15
    },
    proName:{
        fontSize:24,
        fontFamily:'Poppins-Bold',
        color:'#001441'
    },
    date:{
        color:'#595959'
    },
    payBtn:{
        backgroundColor:'#AE1818',
        width:110,
        height:30,
        borderRadius:7,
        justifyContent:'center',
        alignItems:'center'
    },
    itemLine:{
        height:2,
        width:width-80,
        backgroundColor:'#DDDDDD',
        marginTop:10,
        marginBottom:10
    },
    duePay:{
        color:'#001441',
        fontSize:20,
        fontFamily:'Poppins-Regular',
        padding:15
    },
    chartInfoItem:{
        flexDirection:'row',
        marginTop:hp(0.7),
        marginBottom:hp(0.7)
    },
    chartInfoItemText:{
        width:wp(5),
        height:wp(5),
        borderRadius:20/2,
        marginRight:5
    },
    chartInfoItemContent:{
        color:'#222222',
        fontFamily:'Poppins-Regular'
    }
})

export default Dashboard;