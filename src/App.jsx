import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from "./components/home/home.jsx";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import Detail from "./components/detail/detail.jsx";
import Item from "./components/item/item.jsx";

import './App.css';

class App extends Component{

  render(){
    return(
      <Router>
        <Header />
        <Route 
          path="/"
          exact
          component={Home}
        />
        <Route 
          exact
          path="/home" 
          component={Home} />
        <Route 
          path="/item/:category" 
          component={Item} />
        <Route 
          path="/detail/:name" 
          component={Detail} />
        <Footer/>
      </Router>
    )
  }
}

export default App;
