import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class ArtistListItem extends Component {
    // state = {
    //     name: '',
    //     description: '',
    //     price: ''
    // }
    // deleteArtist = (event, id) => {
    //   console.log(id);
    //     axios({
    //         method: 'DELETE',
    //         url: `/artist/${id}`
    //     })
    //     .then((response) => {
    //         this.props.dispatch({
    //             type: 'DELETE_FROM_LIST',
    //             payload: {id}
    //         })
    //         this.props.refresh();
    //     });
    // }

   

    addToCart = (event, item) => {
        console.log(item);
        this.props.dispatch({
            type: 'ADD_TO_CART',
            payload: item
        })
    }

    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.description}</td>
                <td>{this.props.price}</td>
                <td><button onClick={(event) => this.addToCart(event, this.props.item)}>
                    Add To Cart
                    </button></td>
              </tr>
        );
    }
}

export default connect(mapStoreToProps)(ArtistListItem);