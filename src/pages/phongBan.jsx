import React from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const styleSpan = {
	fontSize: 30,
	paddingLeft: 10,
}
const styleBorder = {
	border: '5px solid ',
	margin: 10,
}
const mapStateToProps = state => {
	return {
		departments: state.departments
	}
}

// lay gia tri

function PhongBan(props) {
	return <BodyUI dataAPI={props.departments} />
}

// in ra body
function BodyUI({ dataAPI }) {
	return (
		<React.Fragment>
			<Breadcrumb>
				<BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
				<BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
			</Breadcrumb>
			<div className="row">
				{dataAPI.map((e) =>
					<div style={styleBorder} className="col-12 col-lg-3 col-md-5" key={e.id}>
						<span style={styleSpan}>{e.name}</span>
						<p> Số lượng nhân viên :{e.numberOfStaff}</p>
					</div>

				)}
			</div>
		</React.Fragment>
	)
}


//export default PhongBan
export default withRouter(connect(mapStateToProps)(PhongBan));
