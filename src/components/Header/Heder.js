import React from "react";
import Logo from '../../img/React.png';
import Image from "../Image";
import './Heder.css';

const Heder = () => {
	return ( <header className="heder">
	<Image image={Logo}/>
	</header> );
}
 
export default Heder;