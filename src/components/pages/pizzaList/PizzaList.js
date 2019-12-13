import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import PizzaItem from '../pizzaItem/PizzaItem';


class PizzaList extends Component {

    render() {
        const pizzaArr = this.props.store.pizzaReducer.map((item, index) => {
            return (
            //   <tr key={index}>
            //     <td>{item.name}</td>
            //     <td>{item.description}</td>
            //     <td>{item.price}</td>
            //   </tr>
                    <PizzaItem 
                        item={item}
                        key={index}
                    />
                 )
                });
    
        return (
            <tbody>
                {pizzaArr}
            </tbody>
        )
    }
}


export default connect(mapStoreToProps)(PizzaList);