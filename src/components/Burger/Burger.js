import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        })
        .reduce((previousValue, currentValue) => {
            return previousValue.concat(currentValue);
        }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p style={{ color: '#107AB0' }}>Please start adding ingredients.</p>
    }

    return (

        <div className="burger">
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;