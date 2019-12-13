import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class Cart extends Component {
    onCheckout = (event) => {
        alert('You sure you want to checkout?');
        this.props.history.push('/');
    }

    render() {
        const orderArr = this.props.store.orderReducer.pizzas.map((item, index) => {
            const matchedPizza = this.props.store.pizzaReducer.filter((pizzaOpt, index) => {
                return pizzaOpt.id === item.id;
            });
            return <tr key={index}>
                    <td>{matchedPizza[0].name}</td>
                    <td>{matchedPizza[0].price}</td>
                </tr>
            
        });

        return (
            <div>
           
                <p>Pizza is great.</p>
                <div>
                    <h4>Customer Info:</h4>
                    {this.props.store.orderReducer.customer_name}
                    {this.props.store.orderReducer.street_address}
                    {this.props.store.orderReducer.city}
                    {this.props.store.orderReducer.zip}
                </div>

                <div>
                    <h4>Type:</h4>
                    {this.props.store.orderReducer.type}
                </div>
            

                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderArr}
                        </tbody>
                    </table>

                    <div>
                        <h4>Total:</h4>
                        {this.props.store.orderReducer.total}
                    </div>
                    
                    <button onClick={this.onCheckout}>Checkout</button>
                </div>
            </div>
        );
}
}

export default connect(mapStoreToProps)(Cart);