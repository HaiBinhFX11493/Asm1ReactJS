import logo from './logo.svg';
import './App.css';
import {STAFFS} from "./Components/StaffList/staffs.jsx";

//control data
function AppData() {
  var controlData=STAFFS.map(staff =><div>{staff.name}</div>)

  function In() {
    console.log("params") 
  }
  return (
    <Hienthi1 name={controlData} />
  );
}


//khung
function Hienthi1(props) {
  return <div className="App">
    <div className="HeadingTop">
      Ứng dụng quản lý nhân sự v1.0
    </div>
    <div className="chiaBang">
      <div className="contentBody">
      {/* {props.name.map( e => <Hienthi2 childField={e} />)} */}
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
}

//noidung 1 button
function Hienthi2(props) {
  return <div className="contentName" key={STAFFS.id}>{props.childField}</div>
}


export default AppData;
