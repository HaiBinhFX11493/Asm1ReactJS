import React,{useState} from 'react';
import {Switch,Route,Link,withRouter} from "react-router-dom";
import {connect} from "react-redux";
import './App.css';
import NhanVien from "./pages/nhanVien";
import InfomationEmpoyer from "./pages/profileNv";
import BangLuong from "./pages/bangLuong";
import PhongBan from "./pages/./phongBan";
import BotTomUI from "./BotTomUI";

const mapStateToProps=state => {
	return {
		departments: state.departments,
		role: state.role,
		staffs: state.staffs,
	}
}


// Hien thi title
function AppData(props) {
	const STAFFS=props.staffs
	const DEPARTMENTS=props.departments
	const ROLE=props.role
	// useState
	const [staffs,setStaffs]=useState(STAFFS)

	const [departments,setDepartments]=useState(DEPARTMENTS)
	
	const [role,setRole] = useState(ROLE)

	const DetailEmployee=({match}) => {
		const id=parseInt(match.params.id,10)
		const staff=staffs.filter(x => x.id===id)[0];
		return <InfomationEmpoyer staff={staff} />
	}

	return (<React.Fragment>
		{/* dung router */}
		<div className='HeadingTitle'>
			<li className='TitleLi'><i className="fa fa-home" aria-hidden="true"></i></li>
			<li><Link style={{textDecoration: 'none',color: 'white'}} to="/home"><i className="fa fa-users" aria-hidden="true"> Nhân Viên</i></Link> </li>
			<li><Link style={{textDecoration: 'none',color: 'white'}} to="/PhongBan"><i className="fa fa-address-card-o" aria-hidden="true"></i> Phòng Ban</Link></li>
			<li><Link style={{textDecoration: 'none',color: 'white'}} to="/BangLuong"><i className="fa fa-money" aria-hidden="true"></i> Bảng Lương</Link></li>
		</div>
		<Switch>
			<Route exact path="/home" component={() => <NhanVien staffs={staffs} />} />
			<Route exact path="/home/:id" component={DetailEmployee} />
			<Route exact path="/PhongBan" component={() => < PhongBan departments ={departments}  />} />
			<Route path="/BangLuong" component={() => <BangLuong  staffs={staffs} /> } />
		</Switch>
		<BotTomUI />

	</React.Fragment>


	)
};

export default withRouter(connect(mapStateToProps)(AppData));
