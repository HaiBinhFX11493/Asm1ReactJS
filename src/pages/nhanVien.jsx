import React from 'react'
import {Routes,Route,Link} from "react-router-dom";
// lay gia tri
function NhanVien(props) {
	return (
		<BodyUI dataAPI={props.staffs} />
	)
}

// Render gia tri bang map
function BodyUI({dataAPI}) {

	return (<div className="ContentBodyNhanVien">
		<div className="BtnControl">
		<h2> Nhân Viên </h2>
		<button>+</button>
		<input type="text" />
		<button>Tìm</button>
		</div>
		<div className="contentInfo">
			{dataAPI.map((e) => {
				return <DataNv key={e.id} data={e} />
			})}
		</div></div>
	)
};
// in ra body
function DataNv({data}) {
	return (<div >

		<div className="ContentBorder" data={data}>

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


};


export default NhanVien
