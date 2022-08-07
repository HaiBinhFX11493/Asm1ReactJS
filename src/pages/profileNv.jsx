import React from "react";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';


// Hien thi body con cua NhanVien
function InfomationEmpoyer({ staff }) {

	console.log(staff)

	return (<React.Fragment>
		<Breadcrumb>
			<BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
			<BreadcrumbItem active>{staff.name}</BreadcrumbItem>
		</Breadcrumb>

		<div className="row">
			<div className="col-12 col-md-2 m-1" ><img style={{ height: '180px' }} src={staff.image} alt="avatar" /></div>
			<div className="col-12 col-md-3 m-1">
				<h3>Họ Và Tên: {staff.name}</h3>
				<p> Ngày Sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
				<p> Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</p>
				<p> Phòng Ban: {staff.department.name || staff.department}</p>
				<p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
				<p>Số ngày đã làm thêm: {staff.overTime}</p>
			</div>

		</div>
	</React.Fragment>
	)
}


export default InfomationEmpoyer
