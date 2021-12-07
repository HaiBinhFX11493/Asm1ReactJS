
import './App.css';
import {Routes,Route,Link} from "react-router-dom";
import NhanVien from "./pages/nhanVien";
import BangLuong from "./pages/bangLuong";
import PhongBan from "./pages/phongBan";
import React from 'react';
import styled from 'styled-components';
import BotTomUI from "./BotTomUI";


const HeadingTitle=styled.ul`
color: white;
padding-bottom: 20px;
background-color: #1766f9;
padding-top: 23px;
font-size: 23px;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
`;
const TitleLi= styled.li`
color: white
`

// Hien thi title
function AppData() {
  return (
    <React.Fragment>
      <div >
        <HeadingTitle>
          <TitleLi><i class="fa fa-home" aria-hidden="true"></i></TitleLi>
          <li><Link to="/nhan-vien"><i class="fa fa-users" aria-hidden="true">Nhân Viên</i></Link> </li>
          <li><Link to="/PhongBan"><i class="fa fa-address-card-o" aria-hidden="true"></i>Phòng Ban</Link></li>
          <li><Link to="/BangLuong"><i class="fa fa-money" aria-hidden="true"></i>Bảng Lương</Link></li>
        </HeadingTitle>
        <Routes>
          <Route path="/nhan-vien" element={<NhanVien />} />
          <Route path="/BangLuong" element={<BangLuong />} />
          <Route path="/PhongBan" element={<PhongBan />} />
        </Routes>
      </div>
      <BotTomUI />
    </React.Fragment>

  )
};

export default AppData;
