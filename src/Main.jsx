import React,{useState} from 'react';
import {STAFFS,DEPARTMENTS,ROLE} from "./Components/StaffList/staffs";

import {Switch,Route,Link} from "react-router-dom";
import './App.css';
import NhanVien from "./pages/nhanVien";
import InfomationEmpoyer from "./pages/profileNv";
import BangLuong from "./pages/bangLuong";
import PhongBan from "./pages/./phongBan";
import BotTomUI from "./BotTomUI";



// Hien thi title
function AppData() {
	// 
// useState
	const [staffs,setStaffs]=useState(STAFFS)
	const [departments,setDepartments]=useState(DEPARTMENTS)
	const [role,setRole]=useState(ROLE)
	const DetailEmployee=({match}) => {
		const id=parseInt(match.params.id,10)
		const staff=staffs.filter(x => x.id===id)[0];
		return <InfomationEmpoyer  staff={staff} />
	}

	return (<React.Fragment>
{/* dung router */}
		<div className='HeadingTitle'>
			<div className='TitleLi'><i className="fa fa-home" aria-hidden="true"></i></div>
			<div><Link style={{textDecoration: 'none',color: 'white'}} to="/home"><i className="fa fa-users" aria-hidden="true"> Nhân Viên</i></Link> </div>
			<div><Link style={{textDecoration: 'none',color: 'white'}} to="/PhongBan"><i className="fa fa-address-card-o" aria-hidden="true"></i> Phòng Ban</Link></div>
			<div><Link style={{textDecoration: 'none',color: 'white'}} to="/BangLuong"><i className="fa fa-money" aria-hidden="true"></i> Bảng Lương</Link></div>
		</div>
		<Switch>
			<Route exact path="/home" component={() => <NhanVien  staffs={staffs} />} />
			<Route exact path="/home/:id" component={DetailEmployee} />
			<Route exact path="/PhongBan" component={PhongBan} />
			<Route path="/BangLuong" component={BangLuong} />
		</Switch>
		<BotTomUI />

	</React.Fragment>


	)
};

export default AppData;
