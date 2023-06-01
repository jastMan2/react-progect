import React from "react";
import { NavLink } from "react-router-dom";
import './Dialogs.css'

const DialogItem = (props) => {
	return ( 
	<div className="dialog"><NavLink to={'/dialogs/' + props.id}> {props.name}</NavLink></div>
 );
}
 const Massages = (props) => {
	return ( 
		<div className="massage">{props.massage}</div>
	 );
 }


const Dialogs = (props) => {

	let dialogsData = [
		{id: 1, name: 'ramazan'},
		{id: 2, name: 'salih'},
		{id: 3, name: 'umar'},
		{id: 4, name: 'suleyman'}
	]

	let dialogsElements = dialogsData
	.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

	let massagesData = [
		{id: 1, massage: 'hi, haw are you'},
		{id: 2, massage: 'hi, fine thanks'},
		{id: 3, massage: 'whot do you do'},
		{id: 4, massage: 'nothink'}
	]

	let massaElements = massagesData
	.map(massageEl => <Massages massage={massageEl.massage}/>);

	return ( 
		<>
			<h1 className="title">dialogs</h1>
			<div className="dialog-items">
				<div className="dialogs">
					{dialogsElements}
				</div>
				<div className="massages">
					{massaElements}
				</div>
			</div>
		</>
	 );
}
 
export default Dialogs;