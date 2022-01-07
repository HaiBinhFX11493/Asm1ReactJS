import React,{Component} from "react";
import {Button,FormGroup,Input,Label,Form} from "reactstrap";
import {Control,LocalForm,Errors} from "react-redux-form";



class ThemNv extends Component {

	constructor(props) {
		super(props);

		this.state={
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
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);

	}
	handleInputChange(event){
		const target =event.target;
		const value = target.type === 'checkbox'? target.checked : target.value;
		const name = target.name;
		
		this.setState({
			[name]: value
		})
	}
	
	handleSubmit(event){
		console.log("current State is:" + JSON.stringify(this.state))
		alert("current State is:" + JSON.stringify(this.state))
		event.prevenDefault();
		
	}
	
	render() {
		console.log("current State is:" + JSON.stringify(this.state))
		
		return (
			<Form  onSubmit ={this.handleSubmit}>
				<div className="Border-ThemNv">
					<h2>Thêm Nhân Viên</h2>
					<FormGroup className="Content-ThemNv">
						<Label htmlFor="name">Tên</Label>
						<Input name='name' id="name" type="text" value ={this.state.name} onChange={this.handleInputChange}
						/>
					</FormGroup>
					<FormGroup className="Content-ThemNv">
						<Label htmlFor="doB">Ngày sinh</Label>
						<Input name='doB' id="name" type="date" value ={this.state.doB  } onChange={this.handleInputChange}
						/>
					</FormGroup>
					<FormGroup className="Content-ThemNv">
						<Label htmlFor="startDate">Ngày vào công ty</Label>
						<Input name="startDate" id="startDate" type="date"  value ={this.state.startDate} onChange={this.handleInputChange}/>
					</FormGroup>
					<FormGroup className="Content-ThemNv">
						<Label htmlFor="department">Phòng ban</Label>
						<Input name="department" id="department" type="text" value ={this.state.department} onChange={this.handleInputChange} />
					</FormGroup>
					<FormGroup className="Content-ThemNv">
						<Label htmlFor="salary">Hệ số lương</Label>
						<Input name="salary" id="salary" type="number"  value ={this.state.salary} onChange={this.handleInputChange}/>
					</FormGroup>
					<FormGroup className="Content-ThemNv">
						<Label htmlFor="annualLeave">Số ngày nghỉ còn lại</Label>
						<Input name="annualLeave" id="annualLeave" type="number" value ={this.state.annualLeave} onChange={this.handleInputChange}/>
					</FormGroup>
					<FormGroup className="Content-ThemNv">
						<Label htmlFor="overTime">Sô ngày đã làm thêm</Label>
						<Input name="overTime" id="overTime" type="number" value ={this.state.overTime} onChange={this.handleInputChange}/>
					</FormGroup>
					<Button type="submit" color="primary" >Thêm</Button>
				</div>
			</Form>
		)
	}
}



export default ThemNv
