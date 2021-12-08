import React from 'react';
import styled from 'styled-components';
import {DEPARTMENTS} from "../Components/StaffList/staffs";

const ContentName= styled.div`
border: solid;
margin: 10px;
`
const ContentP=styled.p`
padding-left: 20px;
`


function PhongBan() {
   return <BodyUI dataAPI={DEPARTMENTS} />
}

function BodyUI({dataAPI}) {
   return <div className="BodyPhongBan">
      {dataAPI.map((e) =>
         <ContentName key={e.id}><h1>{e.name}</h1>
            <ContentP> Số lượng nhân viên :{e.numberOfStaff}</ContentP>
         </ContentName>
      )}
   </div>
}


export default PhongBan