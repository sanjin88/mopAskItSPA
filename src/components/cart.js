import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Shelf from './shelf';


class Cart extends Component {

    render() {
        const cartList = this.props.cart.map((item, idx) => {
            return <li key={idx}>{item}</li>;
        });
        return (
            <div className="Cart">
                <Shelf />
                <h2>Shopping Bag</h2>
                <ol>
                    {cartList}
                </ol>
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        cart: state.cart
    };
}


export default connect(mapStateToProps)(Cart);