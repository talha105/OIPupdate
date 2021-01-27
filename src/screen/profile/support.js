import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Header from "../../component/header"
import Chat from './chat'

function Support(params) {
    return (
        <View style={{flex:1}}>
            <Header title="Support" iconName="md-menu"/>
            <View style={{flex:1}}>
                <Chat/>
            </View>
        </View>
    )
}

export default Support