import React from 'react';

import {Routes,Route,Link} from "react-router-dom";
import './App.css';
import NhanVien from "./pages/nhanVien";
import  InfomationEmpoyer from "./pages/profileNv";
import BangLuong from "./pages/bangLuong";
import PhongBan from "./pages/./phongBan";
import BotTomUI from "./BotTomUI";
import { useStore,actions } from "./store";


// Hien thi title
function AppData() {
	// 
	const [state,dispatch] = useStore()

	return (<React.Fragment>

		<div className='HeadingTitle'>
			<li className='TitleLi'><i className="fa fa-home" aria-hidden="true"></i></li>
			<li><Link to="/"><i className="fa fa-users" aria-hidden="true"> Nhân Viên</i></Link> </li>
			<li><Link to="/PhongBan"><i className="fa fa-address-card-o" aria-hidden="true"></i> Phòng Ban</Link></li>
			<li><Link to="/BangLuong"><i className="fa fa-money" aria-hidden="true"></i> Bảng Lương</Link></li>
		</div>
		<Routes>
			<Route path="/" element={<NhanVien />} />
			<Route path="//:id" element={(props) => <InfomationEmpoyer {...props}/>} />
			<Route exact path="/PhongBan" element={<PhongBan />} />
			<Route path="/BangLuong" element={<BangLuong />} />
		</Routes>

		<BotTomUI />

	</React.Fragment>


	)
};

export default AppData;
