import React from 'react';
import {STAFFS} from "../Components/StaffList/staffs";
import {connect} from "react-redux";
import {Switch,Route,Link,withRouter} from "react-router-dom";
// lay gia tri 

const mapStateToProps=state => {
	return {
		staffs: state.staffs,
	}
}

function BangLuong(props) {
	return (<BodyUI dataAPI={props.staffs} />)
}
// hien thi body
function BodyUI({dataAPI}) {
	return (<div>
		<div className="TopInfomationEmpoyer">
		<div ><Link to="/home">Home</Link></div>
		<div className="ContentTopBangLuong">/ Bảng Lương</div>
		</div>
		<div className="BodyBangLuong" >
			{dataAPI.map((element,id) => 
			
			<div className="ContentBangLuong" key={id}>
				<h2 >{element.name}</h2>
				<p className="ContentPBangLuong" >Mã nhân viên: {element.id}</p>
				<p className="ContentPBangLuong" >Hệ số lương: {element.salaryScale}</p>
				<p className="ContentPBangLuong" >Số giờ làm thêm: {element.overTime}</p>
				<div className="ContentTinhLuong">Lương: <TinhLuong dataAPI={element} /> </div>
			</div>)}
		</div>
	</div>)
}
// tinh luong
function TinhLuong({dataAPI}) {
	const basicSalary=3000000;
	const overTimeSalary=200000;
	const salary=(dataAPI.salaryScale*basicSalary)+(dataAPI.overTime*overTimeSalary);
	const result=Math.round(salary,2);

	return result
}






//export default BangLuong
export default withRouter(connect(mapStateToProps)(BangLuong));

