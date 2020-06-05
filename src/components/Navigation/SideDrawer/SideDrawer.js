import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import "./SideDrawer.css";
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';



const sideDrawer = (props) => {

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}></Backdrop>
            <div className={props.open ? 'side-drawer open' : 'side-drawer close'}>
                <Logo height="11%"></Logo>
                <nav>
                    <NavigationItems></NavigationItems>
                </nav>
            </div>
        </Aux>
    )
}

export default sideDrawer;