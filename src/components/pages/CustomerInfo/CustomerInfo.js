import React, { Component } from 'react';
import { connect } from 'react-redux';

class CustomerInfo extends Component {
    state = {
        customer_name: '',
        street_address: '',
        city: '',
        zip: '',
        type: 'delivery',
    }

    changeField = (event, infoKey) => {
        this.setState({
            [infoKey]: event.target.value
        });
    }

    submitCustomerInfo = (event) => {
        event.preventDefault();

        this.props.dispatch({
            type: 'ADD_CUSTOMER_TO_ORDER',
            payload: this.state,
        });

        this.props.history.push('/cart');
    }

    render() {
        return (
            <div>
                <h2>Step 2: Customer Information</h2>

                <form onSubmit={this.submitCustomerInfo}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={this.state.customer_name}
                        onChange={(event) => this.changeField(event, 'customer_name')}
                    />
                    <input
                        type="text"
                        placeholder="Street Address"
                        value={this.state.street_address}
                        onChange={(event) => this.changeField(event, 'street_address')}
                    />
                    <input
                        type="text"
                        placeholder="City"
                        value={this.state.city}
                        onChange={(event) => this.changeField(event, 'city')}
                    />
                    <input
                        type="text"
                        placeholder="Zip"
                        value={this.state.zip}
                        onChange={(event) => this.changeField(event, 'zip')}
                    />

                    <label>
                        <input
                            type="radio"
                            name="deliveryType"
                            value="delivery"
                            checked={this.state.type === 'delivery'}
                            onChange={(event) => this.changeField(event, 'type')}
                        />
                        <span>Delivery</span>
                    </label>
                    
                    <input
                        type="radio"
                        name="deliveryType"
                        value="pickup"
                        id="pickup"
                        checked={this.state.type === 'pickup'}
                        onChange={(event) => this.changeField(event, 'type')}
                    />
                    <label htmlFor="pickup">Pickup</label>

                    <button>NEXT</button>

                </form>
            </div>
        );
    }
}

export default connect()(CustomerInfo);
