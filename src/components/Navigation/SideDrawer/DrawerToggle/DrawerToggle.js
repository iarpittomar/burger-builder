import React from 'react';
import './DrawerToggle.css';

const drawerToggle = (props) => (
    <div className="drawer-toggle" onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;