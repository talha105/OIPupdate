import React from 'react';
import {connect, Provider} from "react-redux"
import store from "./store/index";
import Routes from "./routes";
import Icon from "react-native-vector-icons/AntDesign";




const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <Routes/>
    </Provider>
  );
};


export default App;
