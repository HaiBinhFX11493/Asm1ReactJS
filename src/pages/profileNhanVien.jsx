// Funtion khi onClick
import {STAFFS} from "../Components/StaffList/staffs";
import dateFormat,{masks} from "dateformat";
import {useContext} from "react";
import {Info} from "./nhanVien";



function ProfileNv() {
    const info=useContext(value)
    return <div className="contentInfo">
        <div><img src={info.image} alt="avatar" /></div>
        {<div className="contentInfo2">
            <p>Họ Và Tên:{info.name} </p>
            <p>Ngày vào công ty:{dateFormat(info.doB,"dd/mm/yyyy")}</p>
            <p>Phòng ban :{info.department.name}</p>
            <p>Số ngày nghỉ còn lại: {info.annualLeave}</p>
            <p>Số ngày làm thêm: {info.overTime}</p>
        </div>}
    </div>
};

export default ProfileNv
