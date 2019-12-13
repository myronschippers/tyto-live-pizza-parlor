import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class Cart extends Component {
    state = {
        name: '',
        address: '',
        city: '',
        zip: '',
        type: '',
        total: '',
        pizzas: []
    }


   remove = (event, index) => {
    this.props.dispatch({
        type: 'DELETE_FROM_LIST',
        payload: {index}
        })
   }

   onChange = (event, inputKey) => {
       this.setState({
           [inputKey]: event.target.value,
       })
       console.log(this.state);
   } 


    
   render() {
        const orderArr = this.props.store.orderReducer.map((item, index) => {
        return <tr key={index}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td><button onClick={(event)=>this.remove(event, index)}>
                    Remove from Cart
                    </button>
                </td>
            </tr>
            
        });
       return (
        <div className="App">
           
        <p>Pizza is great.</p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
        <tbody>
            {orderArr}
        </tbody>
        </table>
        <br/>
        <div>
                <input onChange={(event) => this.onChange(event, 'name')} placeholder="Enter Your Name" />
                <input onChange={(event) => this.onChange(event, 'address')} placeholder="Enter Your Addy" />
                <input onChange={(event) => this.onChange(event, 'city')} placeholder="Enter City" />
                <input onChange={(event) => this.onChange(event, 'zip')} placeholder="Enter Zipcode" />
                <select onChange={(event) => this.onChange(event, 'type')}>
                    <option value="pickup">Pickup</option>
                    <option value="delivery">Delivery</option>
                </select>
                <button>Checkout</button>
            </div>
      </div>
       );
}
}

export default connect(mapStoreToProps)(Cart);