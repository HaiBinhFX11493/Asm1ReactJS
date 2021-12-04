
import './App.css';
import {STAFFS} from "./Components/StaffList/staffs.jsx";
import React,{useState} from 'react';
import dateFormat, { masks } from "dateformat";
const now = new Date();
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
  Ứng dụng quản lý nhân sự v1.0
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
  return <React.Fragment >
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
  </React.Fragment>
};

function GetInfo({data}) {
  return <React.Fragment>
    {data&&<div>
      <p>Họ Và Tên:{data.name} </p>
      <p>Ngày vào công ty:{dateFormat(data.doB, "dd/mm/yyyy")}</p>
      <p>Phòng ban :{data.department.name}</p>
      <p>Số ngày nghỉ còn lại: {data.annualLeave}</p>
      <p>Số ngày làm thêm: {data.overTime}</p>
    </div>}
  </React.Fragment>
};

function Employees({employee,hienthi}) {
  var name=employee.name
  return <div onClick={() => hienthi(employee)} className="contentName">{name}</div>
};

export default AppData;
