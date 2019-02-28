import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const AppMenu = (props)=> {
	return (
		<div className="app-header-menu">
			<Link to={props.menu.url}>{props.menu.name}</Link>
		</div>
	)
}

export default AppMenu;
