import React, { useState } from "react";
import { Button, Label, Col, Row, Modal, ModalHeader, ModalBody } from "reactstrap";
import { Control, LocalForm, Errors } from 'react-redux-form'

import 'bootstrap/dist/css/bootstrap.min.css';
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

function ThemNv({ addStaff }) {


	const handleSubmit = (values) => {
		alert(JSON.stringify(values))
		addStaff(values)
	}
	const [navOpen, setNavOpen] = useState({
		isNavOpen: false,
	})
	const [modalOpen, setModalOpen] = useState({
		isModalOpen: false
	})

	const toggleModal = () => {
		setModalOpen({
			isModalOpen: !modalOpen
		});
	}


	return (
		<Modal isOpen={navOpen} toggle={toggleModal}>
			<ModalHeader toggle={toggleModal}>Thêm Nhân Viên</ModalHeader>
			<ModalBody>
				<LocalForm onSubmit={(values) => handleSubmit(values)}>
					<Row className="form-group">
						<Label htmlFor="name" md={5}>
							Tên
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
									minLength: minLength(3),
								}}
							/>
							<Errors
								className="text-danger"
								model=".name"
								show="touched"
								messages={{
									required: "Yêu cầu Nhập",
									minLength: "Yêu cầu nhiều hơn 2 ký tự",
									maxLength: "Yêu cầu ít hơn 30 ký tự",
								}}
							/>
						</Col>
					</Row>

					<Row className="form-group">
						<Label htmlFor="doB" md={5}>
							Ngày Sinh
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
									required: "Yêu cầu Nhập",
								}}
							/>
						</Col>
					</Row>

					<Row className="form-group">
						<Label htmlFor="startDate" md={5}>
							Ngày vào công ty
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
									required: "Yêu cầu Nhập",
								}}
							/>
						</Col>
					</Row>

					<Row className="form-group">
						<Label htmlFor="department" md={5}>
							Phòng Ban
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
								<option value="Sale">Sale</option>
								<option value="HR">HR</option>
								<option value="Marketing">Marketing</option>
								<option value="IT">IT</option>
								<option value="Finance">Finance</option>
							</Control.select>
							<Errors
								className="text-danger"
								model=".department"
								show="touched"
								messages={{
									required: "Yêu cầu Nhập",
								}}
							/>
						</Col>
					</Row>

					<Row className="form-group">
						<Label htmlFor="salaryScale" md={5}>
							Hệ Số Lương
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
									require: "Yêu cầu Nhập",
								}}
							/>
						</Col>
					</Row>

					<Row className="form-group">
						<Label htmlFor="annualLeave" md={5}>
							Số ngày nghỉ còn lại
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
									require: "Yêu cầu Nhập",
								}}
							/>
						</Col>
					</Row>

					<Row className="form-group">
						<Label htmlFor="name" md={5}>
							Số ngày đã làm thêm
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
									require: "Yêu cầu Nhập",
								}}
							/>
						</Col>
					</Row>
					<Row className="form-group">
						<Col md={5}></Col>
						<Col md={7}>
							<Button type="submit" color="primary">
								Thêm
							</Button>
						</Col>
					</Row>
				</LocalForm>
			</ModalBody>
		</Modal>


	)
}




export default ThemNv
