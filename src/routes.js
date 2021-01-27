import React, { Component } from "react";
import {Dimensions} from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from "./screen/authentication/login"
import CreateAcount from "./screen/authentication/create"
import CreatePassword from "./screen/authentication/createPassword"
import ForgetPassword from "./screen/authentication/forgetPassword"
import Dashboard from "./screen/dashboard/dashboard"
import Payment from "./screen/payment/payment"
import CreateProject from "./screen/createproject/createproject";
import Profile from "./screen/profile/profile"
import IconDashboard from "react-native-vector-icons/MaterialIcons"
import IconProject from "react-native-vector-icons/SimpleLineIcons"
import IconCreateProject from "react-native-vector-icons/FontAwesome"
import IconProfile from "react-native-vector-icons/AntDesign"
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DrawerContent from "./component/drawerContent"
import ActiveTab from "./screen/myproject/active";
import CompleteTab from "./screen/myproject/complete";
import Header from "./component/header"
import ProjectDetail from "./screen/myproject/projectdetail"
import Support from "./screen/profile/support"
import Comment from "./screen/myproject/comment"
import { connect } from "react-redux";
import PayNow from "./screen/payment/paynow";
import DeliverNow from "./screen/payment/deliverNow";

const {width}=Dimensions.get('window')
const Tab = createMaterialBottomTabNavigator();
const TopTab=createMaterialTopTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


function Toptabs(){
  return(
    <>
    <Header title="My Projects" iconName="md-menu"/>
    <TopTab.Navigator
    
    tabBarOptions={{
      activeTintColor:'#001441',
      labelStyle:{
        fontWeight:'bold'
      },
      indicatorStyle:{
        backgroundColor:'#29BCFF',
        borderRadius:8,
        height:2
      },
      style:{backgroundColor:'#F2F2F2'}
    }}
    >
      <TopTab.Screen name="active" component={ActiveTab}/>
      <TopTab.Screen name="complete" component={CompleteTab}/>
    </TopTab.Navigator>
    </>
    )
}

function OIPDrawer() {
  return (
    <Drawer.Navigator
    drawerContent={({navigation})=>(<DrawerContent navigation={navigation}/>)}
    drawerStyle={{width:width-50}}
    openByDefault={false}
    >
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="support" component={Support} />
      <Drawer.Screen name="projectdetail" component={ProjectDetail} />
      <Drawer.Screen name="comment" component={Comment} />
      <Drawer.Screen name="paynow" component={PayNow} />
      <Drawer.Screen name="deliver" component={DeliverNow} />
    </Drawer.Navigator>
  );
}

function Tabs(){
    return(
      <Tab.Navigator
      activeColor="#001441"
      inactiveColor="#72809D"
      backBehavior="order"
      labeled={false}
      barStyle={{ backgroundColor: '#ffffff' }}
      initialRouteName="dashboard"
      >
        <Tab.Screen
        name="dashboard"
        component={Dashboard}
        options={{
          tabBarIcon:({color})=><IconDashboard name="dashboard" size={28} color={color}/>
        }}
        />
        <Tab.Screen
        name="myproject"
        component={Toptabs}
        options={{
          tabBarIcon:({color})=><IconProject name="note" size={27} color={color}/>,
        }}
        />
        <Tab.Screen
        name="createproject"
        component={CreateProject}
        options={{
          tabBarIcon:({color})=><IconCreateProject name="plus-square-o" size={30} color={color}/>
        }}
        />
        <Tab.Screen
        name="payment"
        component={Payment}
        options={{
          tabBarIcon:({color})=><IconDashboard name="payment" size={27} color={color}/>
        }}
        />
        <Tab.Screen
        name="profile"
        component={Profile}
        tabBarLabel="Profile"
        options={{
          tabBarIcon:({color})=><IconProfile name="user" size={30} color={color}/>
        }}
        />
      </Tab.Navigator>
    )
}

function LoginScreens(){
  return(
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen 
          name="login" 
          options={{headerShown:false}} 
          component={Login} /> 
          
          <Stack.Screen 
          name="forgetPassword" 
          options={{headerShown:false}} 
          component={ForgetPassword} />
          
          <Stack.Screen 
          name="createPassword" 
          options={{headerShown:false}} 
          component={CreatePassword} />
          
          <Stack.Screen 
          name="createacount" 
          options={{headerShown:false}} 
          component={CreateAcount} />
    </Stack.Navigator>
  )
}

function Routes(props) {
    return (
        <NavigationContainer>
          {props.isLogin?OIPDrawer():LoginScreens()}
          {/* <Stack.Navigator>
            <Stack.Screen name="abc" options={{headerShown:false}} component={DeliverNow}/>
          </Stack.Navigator> */}
      </NavigationContainer>
    )
}

function mapStateToProps({isLogin}){
  return {isLogin}
}

export default connect(mapStateToProps)(Routes)