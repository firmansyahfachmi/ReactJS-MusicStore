import React, {Component} from 'react';

import Search from "./components/search-bar/search.jsx";
import Home from "./components/home/home.jsx";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";

import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      name: "hallo"
    }
  }

  render(){
    return(
      <div>
        <Header />
        <Search/>
        <Home />
        <Footer />
      </div>
    )
  }
}

export default App;
