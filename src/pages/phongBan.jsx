import React from 'react';
import {DEPARTMENTS} from "../Components/StaffList/staffs";


// lay gia tri

function PhongBan() {
	return <BodyUI dataAPI={DEPARTMENTS} />
}


// in ra body
function BodyUI({dataAPI}) {
	return <div className="BodyPhongBan">
		{dataAPI.map((e) =>
			<div className="ContentBangLuong" key={e.id}><h1>{e.name}</h1>
				<div className="ContentPBangLuong"> Số lượng nhân viên :{e.numberOfStaff}</div>
			</div>
		)}
	</div>
}


export default PhongBan