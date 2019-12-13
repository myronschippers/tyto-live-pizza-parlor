import React, { Component } from 'react';
//REDUX
import { connect } from 'react-redux';
import mapStoreToProps from '../redux/mapStoreToProps';
//STYLES
import './App.css';
//REACT-ROUTER
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Cart from '../pages/Cart/Cart';
import CustomerInfo from '../pages/CustomerInfo/CustomerInfo';
import Admin from '../pages/Admin/Admin';

class App extends Component {


  render() {

    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <br />
        {/* <img alt="" src="images/pizza_photo.png" /> */}
        <Route path="/" exact component={Home} />
        <Route path="/customer-info" component={CustomerInfo} />
        <Route path="/cart" component={Cart} />
        <Route path="/admin" component={Admin} />
      </div>
      </Router>
    );
  }
}


export default connect(mapStoreToProps)(App);
