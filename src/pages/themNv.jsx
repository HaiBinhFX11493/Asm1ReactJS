import React,{useState} from "react";
import {Button,FormGroup,Input,Label,Form} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";

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

function ThemNv() {
	
	


	const [newStaff,setNewStaff] = useState({newStaff})
    console.log("🚀 ~ file: themNv.jsx ~ line 24 ~ ThemNv ~ newStaff", {newStaff})

	//handleSubmit()=() => {
	//	console.log("current State is: "+JSON.stringify(newStaff))
	//	alert("current State is: "+JSON.stringify(newStaff))
	//}

	return (
		<Form >
			<div className="Border-ThemNv">
				<h2>Thêm Nhân Viên</h2>
				<FormGroup className="Content-ThemNv">
					<Label for="name">Tên</Label>
					<Input name='name' id="name" type="text"  />
				</FormGroup>
				<FormGroup className="Content-ThemNv">
					<Label for="doB">Ngày sinh</Label>
					<Input name='doB' id="name" type="date" />
				</FormGroup>
				<FormGroup className="Content-ThemNv">
					<Label for="startDate">Ngày vào công ty</Label>
					<Input name="startDate" id="startDate" type="date" />
				</FormGroup>
				<FormGroup className="Content-ThemNv">
					<Label for="department">Phòng ban</Label>
					<Input name="department" id="department" type="text" />
				</FormGroup>
				<FormGroup className="Content-ThemNv">
					<Label for="salary">Hệ số lương</Label>
					<Input name="salary" id="salary" type="number" />
				</FormGroup>
				<FormGroup className="Content-ThemNv">
					<Label for="annualLeave">Số ngày nghỉ còn lại</Label>
					<Input name="annualLeave" id="annualLeave" type="text" />
				</FormGroup>
				<FormGroup className="Content-ThemNv">
					<Label for="overTime">Sô ngày đã làm thêm</Label>
					<Input name="overTime" id="overTime" type="text" />
				</FormGroup>
				<Button type="submit" color="primary">Thêm</Button>
			</div>
		</Form>
	)
}




export default ThemNv
