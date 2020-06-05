import React from 'react';
import "./BuildControls.css";
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => (
    <div className="build-controls">
        <p>Current Price: {props.currentPrice}</p>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                addIngredient={() => props.addIngredient(ctrl.type)}
                removeIngredient={() => props.removeIngredient(ctrl.type)}
                disabled={props.disableInfo[ctrl.type]}
            />
        ))}
        <button className="order-button" onClick={props.purchaseHandler} disabled={!props.purchaseable}>ORDER NOW</button>
    </div>
);

export default buildControls;