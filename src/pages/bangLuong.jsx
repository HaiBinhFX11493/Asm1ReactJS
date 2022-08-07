import React from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

// lay gia tri 


const styleBorder = {
	border: '5px solid ',
	margin: 10,
}
const mapStateToProps = state => {
	return {
		staffs: state.staffs,
	}
}

function BangLuong(props) {
	return (<BodyUI dataAPI={props.staffs} />)
}
// hien thi body
function BodyUI({ dataAPI }) {
	return (<div >
		<Breadcrumb>
			<BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
			<BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
		</Breadcrumb>
		<div className="row"  >
			{dataAPI.map((element, id) =>

				<div style={styleBorder} className="col-12 col-lg-3 col-md-5" key={id}>
					<h2 >{element.name}</h2>
					<p  >Mã nhân viên: {element.id}</p>
					<p  >Hệ số lương: {element.salaryScale}</p>
					<p  >Số giờ làm thêm: {element.overTime}</p>
					<div class="p-3 mb-2 bg-light text-dark"> Lương: <TinhLuong dataAPI={element} /> </div>
				</div>)}
		</div>
	</div>)
}
// tinh luong
function TinhLuong({ dataAPI }) {
	const basicSalary = 3000000;
	const overTimeSalary = 200000;
	const salary = (dataAPI.salaryScale * basicSalary) + (dataAPI.overTime * overTimeSalary);
	const result = Math.round(salary, 2);

	return result
}






//export default BangLuong
export default withRouter(connect(mapStateToProps)(BangLuong));

