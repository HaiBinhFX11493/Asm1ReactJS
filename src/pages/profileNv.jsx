import React from "react";
import {DEPARTMENTS} from "../Components/StaffList/staffs";

function InfomationEmpoyer({staff}) {


	return (
		<div className="ProfileEmpoyee">
			<div className="AvatarProfile"  ><img className="AvatarProfileChild" src={staff.image} alt="avatar" /></div>
			<div className="ContenProfile">
				<h3>Họ Và Tên: {staff.name}</h3>
				<p> Ngày Sinh: {staff.doB}</p>
				{/* <div>Phòng Ban: {staff.department}</div> */}
				<p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
				<p>Số ngày đã làm thêm: {staff.overTime}</p>
			</div>


		</div>

	)
}
export default InfomationEmpoyer
