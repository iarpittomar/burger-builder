import React from 'react';
import "./Toolbar.css";
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';


const toolbar = (props) => (
    <header className="toolbar">
        <DrawerToggle clicked={props.drawerToggleClicked} />

        <Logo height="80%"></Logo>

        <nav className="desktop-only">
            <NavigationItems />
        </nav>

    </header>
);

export default toolbar;