import React from 'react';
import "./NavigationItems.css";
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className="navigation-items">
        <NavigationItem link="#" active>Burger Build</NavigationItem>
        <NavigationItem link="#">Checkout</NavigationItem>
    </ul>
);

export default navigationItems;