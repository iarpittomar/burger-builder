import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import "./CheckoutSummary.css";

const checkoutSummary = (props) => {
    return (
        <div className="checkout-summary">
            <h1>We hope it taste well!</h1>
            <div style={{ width: '100%', margin: 'auto' }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType="danger" clicked>CANCEL</Button>
            <Button btnType="success" clicked>CONTINUE</Button>
        </div>
    )
}

export default checkoutSummary;