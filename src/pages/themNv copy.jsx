import React,{useState} from "react";
import {FormGroup,Input,Label,Form} from "reactstrap";
import {Control,LocalForm,Errors} from "react-redux-form";



function ThemNv() {
	const newStaff={
		id: '',
		name: '',
		doB: '',
		salaryScale: '',
		startDate: '',
		department: '',
		annualLeave: '',
		overTime: '',
		salary: '',
		image: '../Components/images/alberto.png',
	}

	
	const [newStaffs,setNewStaffs]=useState(newStaff)
	


	const handleSubmit = (event) =>{
		console.log(JSON.stringify(newStaffs))
		alert(JSON.stringify(newStaffs))
		event.preventDefault();
	}
	
	return (
		<div >
			<div className="Border-ThemNv">
				<h2>Thêm Nhân Viên</h2>
				<div className="Content-ThemNv">
					<div for="name">Tên</div>
					<input name='name' id="name" type="text"
						onChange={(e) => setNewStaffs({...newStaff,name: e.target.value})}
					/>
				</div>
				<div className="Content-ThemNv">
					<div for="doB">Ngày sinh</div>
					<input name='doB' id="name" type="date"  
					onChange={(e) => setNewStaffs({...newStaff,doB: e.target.value})}/>
				</div>
				<div className="Content-ThemNv">
					<div for="startDate">Ngày vào công ty</div>
					<input name="startDate" id="startDate" type="date"
					 onChange={(e) => setNewStaffs({...newStaff,startDate: e.target.value})}/>
				</div>
				<div className="Content-ThemNv">
					<div for="department">Phòng ban</div>
					<input name="department" id="department" type="text" 
					onChange={(e) => setNewStaffs({...newStaff,department: e.target.value})} />
				</div>
				<div className="Content-ThemNv">
					<div for="salaryScale">Hệ số lương</div>
					<input name="salaryScale" id="salaryScale" type="number" 
					onChange={(e) => setNewStaffs({...newStaff,salaryScale: e.target.value})}/>
				</div>
				<div className="Content-ThemNv">
					<div for="annualLeave">Số ngày nghỉ còn lại</div>
					<input name="annualLeave" id="annualLeave" type="text" 
					onChange={(e) => setNewStaffs({...newStaff,annualLeave: e.target.value})}/>
				</div>
				<div className="Content-ThemNv">
					<div for="overTime">Sô ngày đã làm thêm</div>
					<input name="overTime" id="overTime" type="text" 
					onChange={(e) => setNewStaffs({...newStaff,overTime: e.target.value})}/>
				</div>
				<button onClick={handleSubmit} color="primary">Thêm</button>
			</div>
		</div>
	)
}

export default ThemNv
