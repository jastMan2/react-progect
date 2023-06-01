import React from "react";
import { NavLink } from "react-router-dom";
import './Saitebar.css';

const Nav = () => {
	return ( 
	<nav className="Nav">
		<ul>
			<li><NavLink to="/profile">Profile</NavLink></li>
			<li><NavLink to="/dialogs">Massage</NavLink></li>
			<li><a>News</a></li>
			<li className="setting"><a>setting</a></li>
		</ul>
	</nav> 
	);
}
 
export default Nav;