import React from 'react';



// lay gia tri

function PhongBan(props) {
	return <BodyUI dataAPI={props.departments} />
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