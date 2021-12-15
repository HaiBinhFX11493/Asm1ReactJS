import React ,{useState}from 'react'
import {STAFFS} from "../Components/StaffList/staffs";
import {Routes,Route,Link} from "react-router-dom";
import  InfomationEmpoyer  from "./profileNv";


function NhanVien() {
	return (
		<BodyUI dataAPI={STAFFS} />
	)
}



function BodyUI({dataAPI}) {

	return (<div>
		<li> <Link to="./profileNhanVien"> Nhan Vien </Link></li>
		<div className="contentInfo">
			{dataAPI.map((e) => {
				return <DataNv key={e.id} data={e} />
			})}
		</div></div>
	)

};
function DataNv({data}) {
	const getInfo = ({data})=>{
		return  <InfomationEmpoyer data ={data}/>
	}
	return (<div>
			<div className="contentInfo2">
				<div key ={data.id} ><Link to={`menu/${data.id}`}> <img src={data.image} alt="avatar" />
					<p>Họ Và Tên:{data.name} </p>
					</Link>
				</div>
			</div>
		<div onClick ={()=>getInfo}></div>	
			</div>
	)
};



export default NhanVien
