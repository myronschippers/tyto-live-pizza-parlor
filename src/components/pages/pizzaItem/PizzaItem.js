import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class ArtistListItem extends Component {
    addToCart = (event) => {
        this.props.dispatch({
            type: 'ADD_TO_CART',
            payload: this.props.item
        })
    }

    render() {
        return (
            <tr>
                <td>{this.props.item.name}</td>
                <td>{this.props.item.description}</td>
                <td>{this.props.item.price}</td>
                <td><button onClick={this.addToCart}>
                    Add To Cart
                    </button></td>
              </tr>
        );
    }
}

export default connect(mapStoreToProps)(ArtistListItem);