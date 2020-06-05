import React from 'react';
import './BuildControl.css';
import buildControls from '../BuildControls';

const buildControl = (props) => (
    <div className="build-control">
        <div className="label">{props.label}</div>
        <button onClick={props.removeIngredient} className="less" disabled={props.disabled}>Less</button>
        <button onClick={props.addIngredient} className="more">More</button>
    </div>
)

export default buildControl;