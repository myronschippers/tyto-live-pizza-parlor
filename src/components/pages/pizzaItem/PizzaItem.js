import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class ArtistListItem extends Component {
    state = {
        isAdded: false
    }

    addToCart = (event) => {
        this.props.dispatch({
            type: 'ADD_TO_CART',
            payload: this.props.item
        })
        this.setState({
            isAdded: true,
        })
    }

    removeFromCart = (event) => {
        this.props.dispatch({
            type: 'DELETE_FROM_LIST',
            payload: this.props.item
        })
        this.setState({
            isAdded: false,
        })
    }

    render() {
        let actionButton = (
            <button onClick={this.addToCart}>
                Add To Cart
            </button>
        );

        if (this.state.isAdded) {
            actionButton = (
                <button onClick={this.removeFromCart}>
                    Remove
                </button>
            );
        }

        return (
            <tr>
                <td>{this.props.item.name}</td>
                <td>{this.props.item.description}</td>
                <td>{this.props.item.price}</td>
                <td>{actionButton}</td>
              </tr>
        );
    }
}

export default connect(mapStoreToProps)(ArtistListItem);