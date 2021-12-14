import React from 'react';
import {STAFFS} from "../Components/StaffList/staffs";
import {Routes,Route,Link} from "react-router-dom";


function ProfileNv() {
	return (
		<BodyUI dataAPI={STAFFS} />
	)
}

function BodyUI({dataAPI}) {

	return (<div><li><Link to="/">Home</Link></li>
	</div>)
};

export default ProfileNv