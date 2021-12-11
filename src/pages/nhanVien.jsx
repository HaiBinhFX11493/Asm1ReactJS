import {STAFFS} from "../Components/StaffList/staffs";
import React,{useState} from 'react';
import dateFormat,{masks} from "dateformat";
import {Routes,Route,Link} from "react-router-dom";

const now=new Date();

function NhanVien() {
    return (
        <BodyUI dataAPI={STAFFS} />)
}
//Hien thi Body
function BodyUI({dataAPI}) {
    // Render -----
    return <div className="App" >
        <div className="chiaBang">
            <h1>Nhân Viên</h1>
            <div className="contentBody">
                {dataAPI.map((element,index) => {
                    return <Employees key={index} employee={element} > </Employees>
                })}
            </div>
            <p className="contentP">Bấm vào tên nhân viên để xem thông tin</p>
        </div>
    </div>
};

// Hien thi table khi render bang map
function Employees({employee,hienthi}) {
    var image=employee.image
    var name=employee.name
    return <React.Fragment>
        <li ><Link to="/./profileNhanVien"> <div className="contentName">{<img src={image} />}{name}</div></Link></li>
    </React.Fragment>
};

export default NhanVien
