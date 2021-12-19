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

	const [staffs,setStaffs]=useState(STAFFS)

	const DetailEmployee=({match}) => {
		const id = parseInt(match.params.id, 10)
		const staff=staffs.filter(x => x.id===id)[0];
        console.log("🚀 ~ file: Main.jsx ~ line 22 ~ DetailEmployee ~ staff", staff)
		return <InfomationEmpoyer staff={staff} />
	}

	return (<React.Fragment>

		<div className='HeadingTitle'>
			<li className='TitleLi'><i className="fa fa-home" aria-hidden="true"></i></li>
			<li><Link style={{ textDecoration: 'none',color:'white' }} to="/home"><i className="fa fa-users" aria-hidden="true"> Nhân Viên</i></Link> </li>
			<li><Link style={{ textDecoration: 'none',color:'white' }} to="/PhongBan"><i className="fa fa-address-card-o" aria-hidden="true"></i> Phòng Ban</Link></li>
			<li><Link style={{ textDecoration: 'none',color:'white' }} to="/BangLuong"><i className="fa fa-money" aria-hidden="true"></i> Bảng Lương</Link></li>
		</div>
		<Switch>
			<Route exact path="/home" component={() => <NhanVien staffs={staffs} />} />
			<Route exact path="/home/:id" component={DetailEmployee} />
			<Route exact path="/PhongBan" component={PhongBan} />
			<Route path="/BangLuong" component={BangLuong} />
		</Switch>
		<BotTomUI />

	</React.Fragment>


	)
};

export default AppData;
