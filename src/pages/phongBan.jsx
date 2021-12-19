import React from 'react';
import {DEPARTMENTS} from "../Components/StaffList/staffs";




function PhongBan() {
	return <BodyUI dataAPI={DEPARTMENTS} />
}

function BodyUI({dataAPI}) {
	return <div className="BodyPhongBan">
		{dataAPI.map((e) =>
			<div key={e.id}><h1>{e.name}</h1>
				<div> Số lượng nhân viên :{e.numberOfStaff}</div>
			</div>
		)}
	</div>
}


export default PhongBan