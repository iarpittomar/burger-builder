import React from 'react';
import "./NavigationItem.css"

const navigationItem = (props) => (
    <li className="navigation-item">
        <a href={props.link} className={props.active ? 'active' : ''}>{props.children}</a>
    </li>
);

export default navigationItem;