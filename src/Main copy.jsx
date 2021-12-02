import logo from './logo.svg';
import './App.css';
import {STAFFS,DEPARTMENTS,ROLE} from "./Components/StaffList/staffs.jsx";
import {useState} from 'react';

//Control
function AppData() {
  return (
    <>
      <TitleUI />
      <BodyUI dataAPI={STAFFS} />
    </>
  );

};

function TitleUI() {
  return <div className="App">
    <div className="HeadingTop">
      Ứng dụng quản lý nhân sự v1.0
    </div>
  </div>
};

//Body
function BodyUI({dataAPI}) {
  const [getInfo,setGetInfo]=useState(null)

  const handleClick=(name) => {

    setGetInfo(name)
  }

  return <div className="App">
    <div className="chiaBang">
      <div className="contentBody">
        {dataAPI.map((e,i) => {
          return <Employee hienthi={handleClick} key={i} employee={e}  > </Employee>
        })}
      </div>
      <p className="contentP">Bấm vào tên nhân viên để xem thông tin</p>
    </div>
    <GetInfo data={getInfo}>
    </GetInfo>
  </div>
};

function GetInfo({data}) {
  console.log("🚀 ~ file: Main.jsx ~ line 56 ~ GetInfo ~ department",data&&data.department!=null? data.department:null)

  return <>
    {data&&<div>
      <p>Họ Và Tên:{data.name} </p>
      <p>Ngày vào công ty:{data.doB}</p>
      <p>Phòng ban :{data.department.name}</p>
      <p>Số ngày nghỉ còn lại: {data.annualLeave}</p>
      <p>Số ngày làm thêm: {data.overTime}</p>
    </div>}
  </>
};

function Employee({employee,hienthi}) {
  var name=employee.name
  return <div onClick={() => hienthi(employee)} className="contentName">{name}</div>
};

export default AppData;
