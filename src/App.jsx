import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./components/home/home.jsx";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import Detail from "./components/detail/detail.jsx";
import Item from "./components/item/item.jsx";
import Checkout from "./components/page/checkout";
import Wishlist from "./components/page/wishlist";
import Transaction from "./components/page/transaction";

import store from "./Publics/Redux/store.js";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header key={window.location.search} />
          <Route exact path="/" component={Home} />
          <Route
            path="/item/:category"
            render={props => {
              return <Item {...props} key={window.location.search} />;
            }}
          />
          <Route path="/detail/:name" component={Detail} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/wishlist/:id" component={Wishlist} />
          <Route path="/transaction/:id" component={Transaction} />
          <Footer />
        </Router>
      </Provider>
    );
  }
}

export default App;
