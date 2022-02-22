import React,{useState} from "react";
import {Button,FormGroup,Label,Form,FormFeedback,Col,Row,Modal,ModalHeader,ModalBody} from "reactstrap";
import {Control,LocalForm,Errors} from 'react-redux-form'
import avartar from "../Components/images/alberto.png";
import 'bootstrap/dist/css/bootstrap.min.css';
const required=(val) => val&&val.length;
const maxLength=(len) => (val) => !(val)||(val.length<=len);
const minLength=(len) => (val) => val&&(val.length>=len);

function ThemNv() {


	const handleInputChange=(event) => {
		const target=event.target;
		const value=target.type==='checkbox'? target.checked:target.value;
		const name=target.name;
		this.setState({
			data: {...this.state.data,id: this.props.lengthAll,[name]: value}
		})
	}
	//const toggleModal =()=> {
	//	this.setState({
	//		isModalOpen: !this.state.isModalOpen
	//	})
	//}


	const handleSubmit=(values) => {

		var dataAfter=JSON.parse(localStorage.getItem('data'))!=null? JSON.parse(localStorage.getItem('data')):[];
		localStorage.setItem('data',JSON.stringify([...dataAfter,this.state.data]));
		this.props.setIsUpdateStaff()
	}

	return (


		<ModalBody class="modal fade" tabindex="-1" role="dialog">
			<LocalForm class="modal-dialog" onSubmit={(values) => handleSubmit(values)}>
				<Row  className="form-group">
					<Label htmlFor="name" md={5}>
						Name
					</Label>
					<Col md={7}>
						<Control.text
							model=".name"
							id="name"
							name="name"
							className="form-control"
							validators={{
								required,
								maxLength: maxLength(30),
								minLength: minLength(2),
							}}
						/>
						<Errors
							className="text-danger"
							model=".name"
							show="touched"
							messages={{
								required: "Required !",
								minLength: "Must be greater than 2 characters !",
								maxLength: "Must be smaller than 30 characters !",
							}}
						/>
					</Col>
				</Row>

				<Row className="form-group">
					<Label htmlFor="doB" md={5}>
						Date Of Birth
					</Label>
					<Col md={7}>
						<Control.text
							model=".doB"
							id="doB"
							name="doB"
							className="form-control"
							type="date"
							validators={{
								required: (val) => val,
							}}
						/>
						<Errors
							className="text-danger"
							model=".doB"
							show="touched"
							messages={{
								required: "Required !",
							}}
						/>
					</Col>
				</Row>

				<Row className="form-group">
					<Label htmlFor="startDate" md={5}>
						Start Date
					</Label>
					<Col md={7}>
						<Control.text
							model=".startDate"
							id="startDate"
							name="startDate"
							className="form-control"
							type="date"
							validators={{
								required: (val) => val,
							}}
						/>
						<Errors
							className="text-danger"
							model=".startDate"
							show="touched"
							messages={{
								required: "Required !",
							}}
						/>
					</Col>
				</Row>

				<Row className="form-group">
					<Label htmlFor="department" md={5}>
						Department
					</Label>
					<Col md={7}>
						<Control.select
							model=".department"
							className="form-control"
							name="sale"
							id="sale"
							validators={{
								required,
							}}
						>
							<option></option>
							<option value="Dept01">Sale</option>
							<option value="Dept02">HR</option>
							<option value="Dept03">Marketing</option>
							<option value="Dept04">IT</option>
							<option value="Dept05">Finance</option>
						</Control.select>
						<Errors
							className="text-danger"
							model=".department"
							show="touched"
							messages={{
								required: "Required !",
							}}
						/>
					</Col>
				</Row>

				<Row className="form-group">
					<Label htmlFor="salaryScale" md={5}>
						Salary Scale
					</Label>
					<Col md={7}>
						<Control.text
							model=".salaryScale"
							id="salaryScale"
							name="salaryScale"
							className="form-control"
							type="number.toFixed()"
							placeHolder="1-3"
							defaultValue="1"
							validators={{
								required,
							}}
						/>
						<Errors
							className="text-danger"
							model=".salaryScale"
							show="touched"
							messages={{
								require: "Required !",
							}}
						/>
					</Col>
				</Row>

				<Row className="form-group">
					<Label htmlFor="annualLeave" md={5}>
						AnnualLeave
					</Label>
					<Col md={7}>
						<Control.text
							model=".annualLeave"
							id="annualLeave"
							name="annualLeave"
							className="form-control"
							type="number.toFixed()"
							placeholder="0"
							defaultValue="0"
							validators={{
								required,
							}}
						/>
						<Errors
							className="text-danger"
							model=".annualLeave"
							show="touched"
							messages={{
								require: "Required !",
							}}
						/>
					</Col>
				</Row>

				<Row className="form-group">
					<Label htmlFor="name" md={5}>
						OverTime
					</Label>
					<Col md={7}>
						<Control.text
							model=".overTime"
							id="overTime"
							name="overTime"
							className="form-control"
							type="number.toFixed()"
							placeholder="0"
							defaultValue="0"
							validators={{
								required,
							}}
						/>
						<Errors
							className="text-danger"
							model=".overTime"
							show="touched"
							messages={{
								require: "Required !",
							}}
						/>
					</Col>
				</Row>
				<Row className="form-group">
					<Col md={5}></Col>
					<Col md={7}>
						<Button type="submit" color="primary">
							Add
						</Button>
					</Col>
				</Row>
			</LocalForm>
				
		

		</ModalBody>



	)
}




export default ThemNv
