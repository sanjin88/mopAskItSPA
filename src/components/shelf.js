import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as cartActions from '../actions/cart';

class Shelf extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shelfItems: [
                'shampoo',
                'chocolate',
                'yogurt'
            ]
        }
    }


    renderShelfItems() {
        const shelfItems = this.state.shelfItems.map((item, id) => {
            return (
                <li key={id}>
                    <button onClick={() => this.props.action.addToCart(item)}>[+]</button>{item}
                </li>
            )
        });

        return shelfItems;
    }

    render() {

        return (
            <div>
                <h2>Store Shelf:</h2>
                <ul>
                    {this.renderShelfItems()}
                </ul>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return {
        action: bindActionCreators(cartActions, dispatch)
    }
}
export default connect(null, mapDispatchToProps)(Shelf);