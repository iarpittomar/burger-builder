import React from 'react';
import Logo from '../../assets/img/logo.png';
import "./Logo.css";

const logo = (props) => (
    <div className="logo" style={{ height: props.height }}>
        <img src={Logo} alt="My Burger" />
    </div>
)


export default logo;