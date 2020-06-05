import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    componentDidUpdate() {
        console.log("fsafa");
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map((igKey, index) => {
                return (
                    <li key={igKey + index}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span> : {this.props.ingredients[igKey]}
                    </li>
                )
            });

        return (<Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {this.props.totalPrice} INR</strong></p>
            <p>Continue to Checkout?</p>
            <Button clicked={this.props.purchaseCancelled} btnType="danger">CANCEL</Button>
            <Button clicked={this.props.purchaseContinued} btnType="success">CONTINUE</Button>
        </Aux >
        )
    }
};

export default OrderSummary;