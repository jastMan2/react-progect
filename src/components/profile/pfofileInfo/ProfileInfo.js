import React from "react";
import Image from "../../Image";
import ava from "../../../img/React.png"
import "./Profilrinfo.css"

const ProfileInfo = () => {
	return ( 
		<>
		 <div className="profileInfo">
			<div className="ava"><Image image={ava}/></div>  description
		 </div>
		</>
	 );
}
 
export default ProfileInfo;