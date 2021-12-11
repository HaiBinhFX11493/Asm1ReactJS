// Funtion khi onClick
import {STAFFS} from "../Components/StaffList/staffs";
import dateFormat,{masks} from "dateformat";
import NhanVien from "./nhanVien";
import {Routes,Route,Link} from "react-router-dom";


function ProfileNv(employee) {
    return (
        <BodyUI dataAPI={STAFFS} />
    )
}

function BodyUI({dataAPI}) {
    return <div className="contentInfo">
        {dataAPI.map((e,i) => {
            return <DataNv data={e} />
        })}
    </div>
};
function DataNv({data}) {
    return <div className="contentInfo">
<div><img src={data.image} alt="avatar" /></div>
        {<div className="contentInfo2">
            <p>Họ Và Tên:{data.name} </p>
            <p>Ngày vào công ty:{dateFormat(data.doB,"dd/mm/yyyy")}</p>
            <p>Phòng ban :{data.department.name}</p>
            <p>Số ngày nghỉ còn lại: {data.annualLeave}</p>
            <p>Số ngày làm thêm: {data.overTime}</p>
        </div>}
    </div>
};

export default ProfileNv
