import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import axios from 'axios';
import PizzaList from '../pizzaList/PizzaList';

class Home extends Component {
  componentDidMount() { // react Component method
    this.getPizza();
  }
      
  getPizza = () => {
    axios({
      method: 'GET',
      url: '/api/pizza'
    })
      .then((response) => {
        console.log(response.data);
        this.props.dispatch({
          type: 'GET_PIZZA',
          payload: response.data,
        })
      })
      .catch((error) => {
        console.warn(error);
      })
  }

  goToNext = (event) => {
    // navigate to Customer Info
    this.props.history.push('/customer-info');
  }
    
  render() {
      return (
        <div className="App">
          <h2>Step 1: Select Your Pizza</h2>
          <p>Pizza is great.</p>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Add to Cart</th>
              </tr>
            </thead>
            <PizzaList />
          </table>
          <div>
            <button onClick={this.goToNext}>NEXT</button>
          </div>
        </div>
      );
  }
}

export default connect(mapStoreToProps)(Home);