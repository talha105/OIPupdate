import React, { Component } from 'react';
import {connect, Provider} from "react-redux"
import store from "./store/index";
import Routes from "./routes";
import SplashScreen from 'react-native-splash-screen'
import Icon from "react-native-vector-icons/AntDesign";



class App extends Component{
  componentDidMount() {
      SplashScreen.hide();
  }
  render(){
    return (
      <Provider store={store}>
        <Routes/>
      </Provider>
    );
  }
}


export default App;
