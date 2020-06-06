import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {

    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
    }

    onCheckoutCancel = () => {

    }

    onCheckoutContinued = () => {

    }

    render() {
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients}></CheckoutSummary>
            </div>
        )

    }
}

export default Checkout;