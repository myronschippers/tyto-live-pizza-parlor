import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const pizzaReducer = (state = [], action) => {
    if(action.type === 'GET_PIZZA') {
        return [
            ...action.payload,
        ]
    }
    return state;
}

const defaultOrder = {
    customer_name: "",
    street_address: "",
    city: "",
    zip: "",
    total: 0,
    type: "",
    pizzas: [
        // {
        //     "id": "1",
        //     "quantity": "1"
        // },
        // {
        //     "id": "2",
        //     "quantity": "1"
        // }
    ]
};
const orderReducer = (state= defaultOrder, action) => {
    if(action.type === 'ADD_TO_CART') {
        const total = state.total + parseFloat(action.payload.price);
        return {
            ...state,
            pizzas: [
                ...state.pizzas,
                {
                    id: action.payload.id,
                    quantity: 1
                }
            ],
            total: total,
        }
    } else if (action.type === 'DELETE_FROM_LIST') {
        const total = state.total - parseFloat(action.payload.price);
        const newState = state.pizzas.filter((item, index) => {
            return item.id !== action.payload.id;
        });

        return {
            ...state,
            pizzas: newState,
            total: total,
        }
    } else if (action.type === 'ADD_CUSTOMER_TO_ORDER') {
        return {
            ...state,
            ...action.payload
        };
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        pizzaReducer,
        orderReducer
    }),
    applyMiddleware(logger),
)


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
