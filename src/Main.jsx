
import './App.css';
<<<<<<< HEAD
import {STAFFS} from "./Components/StaffList/staffs.jsx";
import React,{useState} from 'react';
import dateFormat,{masks} from "dateformat";
const now=new Date();
//Control Body
function AppData() {
  return (
    <React.Fragment>
      <TitleUI />
      <BodyUI dataAPI={STAFFS} />
    </React.Fragment>
  );
};
// Hien thi title
function TitleUI() {
  return (
    <div className="HeadingTop">
      <nav>
        <ul>
          <li>
           <a href ="/">AVT</a>
            </li>
          <li>
          <a href ="/">Nhân Viên</a>
            </li>
          <li>
          <a href ="/">Phòng Ban</a>
            </li>
          <li>
          <a href ="/">Bảng Lương</a>
            </li>
        </ul>
      </nav>
    </div>
  )
};
//Hien thi Body
function BodyUI({dataAPI}) {
  // Hook useState
  const [getInfo,setGetInfo]=useState(null)
  const handleClick=(name) => {
    setGetInfo(name)
  }
  // Render -----
  return <div className="App" >
    <div className="chiaBang">
      <div className="contentBody">
        {dataAPI.map((element,index) => {
          return <Employees hienthi={handleClick} key={index} employee={element} > </Employees>
        })}
      </div>
      <p className="contentP">Bấm vào tên nhân viên để xem thông tin</p>
    </div>
    <GetInfo data={getInfo}>
    </GetInfo>
  </div>
};
// Funtion khi onClick
function GetInfo({data}) {
  return <div className="contentInfo">
    {data&&<div className="contentInfo2">
      <p>Họ Và Tên:{data.name} </p>
      <p>Ngày vào công ty:{dateFormat(data.doB,"dd/mm/yyyy")}</p>
      <p>Phòng ban :{data.department.name}</p>
      <p>Số ngày nghỉ còn lại: {data.annualLeave}</p>
      <p>Số ngày làm thêm: {data.overTime}</p>
    </div>}
  </div>
};
// Hien thi table khi render bang map
function Employees({employee,hienthi}) {
  var image=employee.image
  var name=employee.name
  return <React.Fragment>
    <div onClick={() => hienthi(employee)} className="contentName">{<img src={image} />}{name}</div>
  </React.Fragment>
=======
import {Routes,Route,Link} from "react-router-dom";
import NhanVien from "./pages/nhanVien";
import BangLuong from "./pages/bangLuong";
import PhongBan from "./pages/phongBan";
import ProfileNv from "./pages/profileNhanVien";
import React,{createContext} from 'react';
import BotTomUI from "./BotTomUI";
>>>>>>> origin/redux






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
