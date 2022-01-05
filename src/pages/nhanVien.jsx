import React,{useEffect,useState} from 'react'
import {Switch,Route,Link,withRouter} from "react-router-dom";
import {connect} from "react-redux";

import ThemNv from "./themNv";
const mapStateToProps=state => {
	return {
		staffs: state.staffs,
	}
}

// lay gia tri
function NhanVien(props) {
	return (
		<BodyUI dataAPI={props.staffs} />
	)

}

// Render gia tri bang map
function BodyUI({dataAPI}) {
	

	const [show,setShow]=useState(false)
	const [tenNv,setTenNv]=useState('')
	const [findNv,setFindNv]=useState([])
	const handleFindNv=() => {
		var resultFilter=dataAPI.filter(ele => ele.name.split('').slice(-1).join('').toLowerCase()==tenNv.toLowerCase());
		if(resultFilter) {
			return (setFindNv(resultFilter))
		}
	}


	return (
		<div className="ContentBodyNhanVien">
			<div className="BtnControl">
				<h2> Nhân Viên </h2>
				<div>
					<button onClick={() => setShow(!show)} className="btn-plusNV">+</button>
					<input value={tenNv} onChange={e => setTenNv(e.target.value)} className="inputSeach" />
					<button onClick={handleFindNv} className="btn-Seach">Tìm</button>
				</div>
			</div>
			{show&&<ThemNv className="tim-nv" />}
			<div className="contentInfo">
				{
					findNv.length == 0 ? 
					dataAPI.map((e) =>{
						return (<DataNv key={e.id} data={e} />)
					}):
					findNv.map((e) =>{
						return  (<DataNv key={e.id} data={e} />)
					})
				}
			</div>
		</div>
	)
}
// in ra body
function DataNv({data}) {
	return (<div >
		<div className="ContentBorder">
			<div className="contentInfo2">
				<div key={data.id} >
					<Link to={`/home/${data.id}`} >
						<img className="ContentIMG" src={data.image} alt="avatar" />
						<p className="CenterP">{data.name} </p>
					</Link>
				</div>
			</div>
		</div>
	</div>
	)
}



export default withRouter(connect(mapStateToProps)(NhanVien));
