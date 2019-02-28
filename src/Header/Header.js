import React, { Component } from 'react';


// import logo from './logo.svg';
import './Header.css';
import AppMenu from './AppMenu.js';

class Header extends Component {
	constructor(props){
		super(props);
		this.state = {
			menu: [
				{
					name: 'HOME',
					url: '/'
				},
				{
					name: 'About',
					url: '/about'
				},
				{
					name: 'Contact',
					url: '/contact'
				}
			]
		}	
	}



	render() {
		return (
		  <div className="app-header-wrapper">
		    <div className='app-header'>
		    	{
		    		this.state.menu.map((data, index)=>{
		    			return(
		    				<AppMenu key={index} menu={data} />
		    			);
		    		})
		    	}
		    </div>
	    	<div className="app-menu-handle">
	    		<span id='app-menu-handler-w'>
					<span id='app-menu-handler'></span>
	    		</span>
	    	</div>
		  </div>
		);
	}
}

export default Header;
