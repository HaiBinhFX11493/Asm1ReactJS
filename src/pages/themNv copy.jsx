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
		image: '/assets/images/alberto.png',
	}

	
	const [newStaffs,setNewStaffs]=useState(newStaff)
	console.log("==============",newStaffs)


	return (
		<Form >
			<div className="Border-ThemNv">
				<h2>Thêm Nhân Viên</h2>
				<FormGroup className="Content-ThemNv">
					<Label for="name">Tên</Label>
					<Input name='name' id="name" type="text"
						onChange={(e) => setNewStaff({...newStaff,name: e.target.value})}
					/>
				</FormGroup>
				<FormGroup className="Content-ThemNv">
					<Label for="doB">Ngày sinh</Label>
					<Input name='doB' id="name" type="date"  
					onChange={(e) => setNewStaff({...newStaff,doB: e.target.value})}/>
				</FormGroup>
				<FormGroup className="Content-ThemNv">
					<Label for="startDate">Ngày vào công ty</Label>
					<Input name="startDate" id="startDate" type="date"
					 onChange={(e) => setNewStaff({...newStaff,startDate: e.target.value})}/>
				</FormGroup>
				<FormGroup className="Content-ThemNv">
					<Label for="department">Phòng ban</Label>
					<Input name="department" id="department" type="text" 
					onChange={(e) => setNewStaff({...newStaff,department: e.target.value})} />
				</FormGroup>
				<FormGroup className="Content-ThemNv">
					<Label for="salaryScale">Hệ số lương</Label>
					<Input name="salaryScale" id="salaryScale" type="number" 
					onChange={(e) => setNewStaff({...newStaff,salaryScale: e.target.value})}/>
				</FormGroup>
				<FormGroup className="Content-ThemNv">
					<Label for="annualLeave">Số ngày nghỉ còn lại</Label>
					<Input name="annualLeave" id="annualLeave" type="text" 
					onChange={(e) => setNewStaff({...newStaff,annualLeave: e.target.value})}/>
				</FormGroup>
				<FormGroup className="Content-ThemNv">
					<Label for="overTime">Sô ngày đã làm thêm</Label>
					<Input name="overTime" id="overTime" type="text" 
					onChange={(e) => setNewStaff({...newStaff,overTime: e.target.value})}/>
				</FormGroup>
				<button type="submit" color="primary">Thêm</button>
			</div>
		</Form>
	)
}

export default ThemNv
