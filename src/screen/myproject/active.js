import React, { Component } from 'react'
import { Text, View,FlatList ,StyleSheet,TouchableOpacity} from 'react-native';
import PaymentItem from "../../component/paymentItem"
import Payment from '../payment/payment';
import { useNavigation } from '@react-navigation/native';
function ActiveTab(props) {
    const navigation = useNavigation();
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
            <TouchableOpacity onPress={()=>navigation.navigate('projectdetail')}>
            <PaymentItem 
            projectName={item.projectName} 
            payment={item.payment} 
            date={item.date}
            btnColor='#AE1818'
            btnName="PAY NOW"
            navigate={()=>navigation.navigate('paynow')}
            />
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.con}>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={FlatData}
            keyExtractor={(item,i)=>i.toString()}
            renderItem={renderList}
            />
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

export default ActiveTab
