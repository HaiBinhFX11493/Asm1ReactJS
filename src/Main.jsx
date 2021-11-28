import logo from './logo.svg';
import './App.css';
import {STAFFS,DEPARTMENTS,ROLE} from "./Components/StaffList/staffs.jsx";

//Control
function AppData() {
  var controlData=STAFFS.map(staff => <div>{staff.name}</div>)
  return (
    <Hienthi1 name={controlData} />
  );
};

//Body
function Hienthi1(props) {
  return <div className="App">
    <div className="HeadingTop">
      Ứng dụng quản lý nhân sự v1.0
    </div>
    <div className="chiaBang">
      <div className="contentBody">
        {/* Hiển Thị Hết Nhân viên */}
        {/* {props.name.map( e => <Hienthi2 childField={e} />)} */}

        {/* Hiện thị 6 nhân viên đầu */}
        <Hienthi2 childField={props.name[0]} />
        <Hienthi2 childField={props.name[1]} />
        <Hienthi2 childField={props.name[2]} />
        <Hienthi2 childField={props.name[3]} />
        <Hienthi2 childField={props.name[4]} />
        <Hienthi2 childField={props.name[5]} />
      </div>
      <p className="contentP">Bấm vào tên nhân viên để xem thông tin</p>
    </div>
  </div>
};

//noidung Body
function Hienthi2(props) {
  return <div  className="contentName" key={STAFFS.id}>{props.childField}</div>
};
// function LayGiaTriPhongBan() {
//   var giaTriPhongBan=DEPARTMENTS.map(DEPARTMENT => <div>{DEPARTMENT.name}</div>)
//   return <HienthiThongTin Phongban={giaTriPhongBan} />
// };


// Tao ham lay thong tin 
function LayThongTin(props) {
  var HienthiTT=STAFFS.map((staff) =>
    <div> Họ Và Tên:{staff.name}
      Ngày vào công ty:{staff.doB}
      Phòng ban :{staff.department}
      Số ngày nghỉ còn lại: {staff.annualLeave}
      Số ngày làm thêm: {staff.overTime}
    </div>)
  return  {HienthiTT}
};
// Hien thi thong tin nhan vien



export default AppData;
