import {STAFFS} from "../Components/StaffList/staffs";
import React,{createContext} from 'react';
import {Routes,Route,Link} from "react-router-dom";
import { Information } from "../Main";


export const Infor = createContext()


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
function Employees({employee}) {
    var image=employee.image
    var name=employee.name
    return <Infor.Provider value ={employee}>
        <li ><Link to="/./profileNhanVien"> <div className="contentName">{<img src={image} />}{name}</div></Link></li>
    </Infor.Provider>
};

export default NhanVien
