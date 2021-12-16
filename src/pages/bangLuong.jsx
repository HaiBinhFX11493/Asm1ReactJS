import React from 'react';
import styled from 'styled-components';
import {STAFFS} from "../Components/StaffList/staffs";

const BodyBangLuong=styled.div`
display: grid;
    grid-template-columns: 1fr 1fr 1fr;
 
`
const BoxContent=styled.div`
border: solid;
margin: 10px;
padding-left: 20px;
`


function BangLuong() {
    return (<BodyUI dataAPI={STAFFS}/>)
}

function BodyUI({dataAPI}) {
    return <BodyBangLuong >
{dataAPI.map((element,id)=><BoxContent key ={id}>
<h2 >{element.name}</h2>
<p>Mã nhân viên: {element.id}</p>
<p>Hệ số lương: {element.salaryScale}</p>
<p>Số giờ làm thêm: {element.overTime}</p>
</BoxContent>)}
    </BodyBangLuong>
}






export default BangLuong
