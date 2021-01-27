import React, { Component } from 'react'
import { Text, View,StyleSheet ,Image,TouchableOpacity,Dimensions} from 'react-native'

const {width,height}=Dimensions.get('window')
function PaymentItem({projectName,payment,date,btnName,btnColor,navigate}) {
    return (
        <View style={styles.con}>
            <View style={styles.left}>
                <Image source={require('../../assets/images/round.png')}/>
            </View>
            <View style={styles.center}>
            <Text style={styles.title}>{projectName}</Text>
            <Text>In process</Text>
            <Text style={styles.amount}>{payment}</Text>
            </View>
            <View style={styles.right}>
                <Text style={styles.date}>{date}</Text>
                <TouchableOpacity onPress={()=>{
                    navigate?navigate():null
                }}>
                    <Text style={{...styles.btn,backgroundColor:btnColor}}>{btnName}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    con:{ 
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:7,
        backgroundColor:'white',
        padding:10,
        marginTop:10,
        marginBottom:10

    },
    right:{
        justifyContent:'space-between',
        alignItems:'flex-end',
        height:70,
    },
    title:{
        fontSize:24,
        color:'#001441',
        fontWeight:'bold'
    },
    subTitle:{
        color:'#222222',
        fontSize:12
    },
    amount:{
        color:'#222222',
        fontSize:24
    },
    btn:{
        textAlign:'center',
        textAlignVertical:'center',
        width:77,
        height:27,
        fontSize:12,
        fontWeight:'bold',
        borderRadius:5,
        color:'white'
    },
    date:{
        fontSize:12,
        color:'#222222'
    }
})
export default PaymentItem;