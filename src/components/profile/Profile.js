import React from "react";
import carphoto from '../../img/carphotos.jpg'
import Image from "../Image";
import './Profile.css';
import Post from "./myPosts/post/Post";
import NewPost from "./myPosts/NewPost";
import ProfileInfo from "./pfofileInfo/ProfileInfo";


const Content = () => {

	let postsData = [
		{id: 1, massage:'hi, haw are you', likes: '1'},
		{id: 2, massage:'whot is yor name', likes: '4'}
	]

	let postsElement = postsData
	.map(postMassage => <Post massage={postMassage.massage} like={postMassage.likes}/>)

	return (
	<div className="content">
		<Image className='contentFone' image={carphoto}/>
		<ProfileInfo />
		<h3 className="fragname">my posts</h3>
		<NewPost />
		{postsElement}
	</div>
	
);
}
 
export default Content;