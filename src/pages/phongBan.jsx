import {DEPARTMENTS} from "../Components/StaffList/staffs";

function PhongBan() {
   
   return (<div className="chiaBangPhongBan">{DEPARTMENTS.map(e=>{e.name})}</div> )
}

export default PhongBan