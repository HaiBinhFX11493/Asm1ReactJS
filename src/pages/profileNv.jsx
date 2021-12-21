import React from "react";
import {Routes,Route,Link} from "react-router-dom";
import dateFormat,{masks} from "dateformat";
const now=new Date();

function InfomationEmpoyer({staff}) {


	return (<div>
		<div  className="TopInfomationEmpoyer">
		<div><Link to="/home">Home</Link></div>
		<div className="ContentTopBangLuong" >/ {staff.name}</div>
		</div>
		<div className="ProfileEmpoyee">
			<div className="AvatarProfile"  ><img className="AvatarProfileChild" src={staff.image} alt="avatar" /></div>
			<div className="ContenProfile">
				<h3>Họ Và Tên: {staff.name}</h3>
				<p> Ngày Sinh: {dateFormat(staff.doB,"dd/mm/yyyy")}</p>
				<p> Ngày vào công ty: {dateFormat(staff.startDate,"dd/mm/yyyy")}</p>
				<p>Phòng Ban: {staff.department.name}</p>
				<p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
				<p>Số ngày đã làm thêm: {staff.overTime}</p>
			</div>
			
		</div>
	</div>
	)
}


export default InfomationEmpoyer
