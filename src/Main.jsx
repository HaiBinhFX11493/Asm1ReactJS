
import './App.css';
import {Routes,Route,Link} from "react-router-dom";
import NhanVien from "./pages/nhanVien";
import BangLuong from "./pages/bangLuong";
import PhongBan from "./pages/phongBan";
import ProfileNv from "./pages/profileNhanVien";
import React,{createContext} from 'react';
import BotTomUI from "./BotTomUI";






// Hien thi title
function AppData() {
	
  return (<React.Fragment>
  <div >
        <div className='HeadingTitle'>
          <li className='TitleLi'><i className="fa fa-home" aria-hidden="true"></i></li>
          <li><Link to="/nhan-vien"><i className="fa fa-users" aria-hidden="true"> Nhân Viên</i></Link> </li>
          <li><Link to="/PhongBan"><i className="fa fa-address-card-o" aria-hidden="true"></i> Phòng Ban</Link></li>
          <li><Link to="/BangLuong"><i className="fa fa-money" aria-hidden="true"></i> Bảng Lương</Link></li>
        </div>
        <Routes>
          <Route path="/" element={<NhanVien />} />
          <Route path="/nhan-vien" element={<NhanVien />} />
          <Route path="/BangLuong" element={<BangLuong />} />
          <Route path="/PhongBan" element={<PhongBan />} />
          <Route path="/profileNhanVien" element={<ProfileNv />} />
        </Routes>
      </div>
      <BotTomUI />
       </React.Fragment>


  )
};

export default AppData;
