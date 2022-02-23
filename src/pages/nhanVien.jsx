import React,{useState} from 'react'
import {Link,withRouter} from "react-router-dom";
import {connect} from "react-redux";
import { Card, CardImg } from 'reactstrap'
import ThemNv from "./themNv";
const mapStateToProps=state => {
	return {
		//staffs: state.staffs,
	}
}

// lay gia tri
function NhanVien(props) {

	return (
		<BodyUI staffs={props.staffs} addStaff={props.addStaff} />
	)

}

// Render gia tri bang map
function BodyUI({staffs, addStaff}) {


	const [allEmployee,setAllEmployee]=useState(staffs)
	const [show,setShow]=useState(false)
	const [tenNv,setTenNv]=useState('')
	const [findNv,setFindNv]=useState([])
	const handleFindNv=() => {
		var resultFilter=allEmployee.filter(ele => ele.name.split('').slice(-1).join('').toLowerCase()==tenNv.toLowerCase());
		if(resultFilter) {
			return (setFindNv(resultFilter))
		}
	}

	
	const  openModal =()=> {
		setShow(!show)
		
	}
	
 
	return (
		<div className="container" >
			<div className="row" >
				<h2 className="col-lg-3 col-md-3 col-8"> Nhân Viên </h2>
				<div className="col-lg-1 col-md-1 col-4"> <button type="button" class="btn btn-secondary"  onClick={() => openModal()}> + </button></div>	
					<div className="col-lg-1 col-md-1"></div>
					<input className="col-lg-4 col-md-4 col-8" value={tenNv} onChange={e => setTenNv(e.target.value)} />
					{/*<div className="col-lg-1 col-md-1"></div>*/}
					<div className="col-lg-2 col-md-2 col-4"><button type="button" className="btn btn-primary"  onClick={handleFindNv}>Tìm</button></div>
			
			</div>
			{show&&<ThemNv  staffs={staffs}  addStaff={addStaff}/>}

			<div className="row"  >
				{
					findNv.length==0?
						allEmployee.map((e) => {
      			//  console.log("=============allEmployee", allEmployee)
							return (<DataNv  key={e.id} data={e}
							/>)
						}):
						findNv.map((e) => {
							return (<DataNv  key={e.id} data={e}
							/>)
						})
				}
			</div>

		</div>
	)
}
// in ra body
function DataNv({data}) {
	return (
		//class="col-12 col-md m-1"
		<div className="col-6 col-lg-2 col-md-4">
			<Card >
				<div  key={data.id} >
					<Link to={`/home/${data.id}`} >
						<CardImg   src={data.image} alt="avatar" />
						<span style={{ textDecoration: 'none'}}  className="col d-flex justify-content-center text-body">{data.name} </span>
					</Link>
				</div>
			</Card>
			</div>
	)
}




export default withRouter(connect(mapStateToProps)(NhanVien));
