
import {STAFFS} from "../Components/StaffList/staffs";
import {Routes,Route,Link} from "react-router-dom";


function NhanVien() {
	return (
		<BodyUI dataAPI={STAFFS} />
	)
}

function BodyUI({dataAPI}) {


	return (<div>
		<li> <Link to="./profileNhanVien"> Nhan Vien </Link></li>
		<div className="contentInfo">
			{dataAPI.map((e,i) => {
				return <DataNv key={i} data={e} />
			})}
		</div></div>
	)

};
function DataNv({data,}) {
	return (
		<>
			<div className="contentInfo2">
				<div  ><Link to="./profileNhanVien"> <img src={data.image} alt="avatar" />
					<p>Họ Và Tên:{data.name} </p></Link>
				</div>
			</div>
		</>
	)
};

export default NhanVien
