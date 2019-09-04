import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux'

import Home from "./components/home/home.jsx";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import Detail from "./components/detail/detail.jsx";
import Item from "./components/item/item.jsx";

import store from './Publics/Redux/store.js';

import './App.css';

class App extends Component{

  render(){
    return(
      <Provider store={store}>
      <Router>
        <Header />
        <Route 
          path="/"
          exact
            render={({ history }) => {
              return <Home history={history} key={window.location.search} />
            }}
        />
        {/* <Route 
          exact
          path="/home" 
          component={Home} /> */}
        <Route 
          path="/item/:category" 
          component={Item} />
        <Route 
          path="/detail/:name" 
          component={Detail} />
        <Footer/>
      </Router>
      </Provider>
    )
  }
}

export default App;
