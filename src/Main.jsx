
import './App.css';
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
     <div>Avt</div>
     <div>Nhân Viên</div>
     <div>Phòng Ban</div>
     <div>Bảng lương</div>
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
  return<React.Fragment>
  <div onClick={() => hienthi(employee)} className="contentName">{<img src={image} />}{name}</div>
  </React.Fragment>

};

export default AppData;
