import React, { useState,useEffect } from 'react'
import { Text, View,FlatList,StyleSheet,Animated ,Dimensions} from 'react-native';
import Header from "../../component/header"
import PaymentItem from "../../component/paymentItem"
import { useNavigation } from '@react-navigation/native';
const {height}=Dimensions.get('window')
function PaymentPage(props) {
    const navigation=useNavigation();
    const position=useState(new Animated.Value(height))[0];
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
  },{
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

    const renderList=({item})=>{
        return(
            <PaymentItem 
            projectName={item.projectName} 
            payment={item.payment} 
            date={item.date}
            btnColor='#007B0C'
            btnName="DELIVERED"
            navigate={()=>navigation.navigate('deliver')}
            />
        )
    }
    return (
        <View>
            <Header title="Payment" iconName="md-menu"/>
            <Animated.View style={{...styles.con,transform:[{translateY:position}]}}>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={FlatData}
            keyExtractor={(item,i)=>i.toString()}
            renderItem={renderList}
            />
            </Animated.View>
        </View>
    )
}
const styles=StyleSheet.create({
    con:{
        paddingLeft:15,
        paddingRight:15,
        paddingBottom:10,
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
    }
})
export default PaymentPage
