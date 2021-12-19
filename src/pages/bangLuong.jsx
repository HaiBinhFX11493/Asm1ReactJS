import React from 'react';
import {STAFFS} from "../Components/StaffList/staffs";



function BangLuong() {
    return (<BodyUI dataAPI={STAFFS}/>)
}

function BodyUI({dataAPI}) {
    return <div >
{dataAPI.map((element,id)=><div key ={id}>
<h2 >{element.name}</h2>
<p>Mã nhân viên: {element.id}</p>
<p>Hệ số lương: {element.salaryScale}</p>
<p>Số giờ làm thêm: {element.overTime}</p>
</div>)}
    </div>
}






export default BangLuong
