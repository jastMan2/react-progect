import React from "react";
import Image from "../../../Image";
import ava from '../../../../img/React.png';
import './Post.css';

const Post = (props) => {
	return ( 
		<div className="Post">
			<Image image={ava}/>
			{props.massage}
			<button>like {props.like}</button>
		</div>
	 );
}
 
export default Post;