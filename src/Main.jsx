import React,{useEffect,useState} from 'react'
import {Switch,Route,Link,withRouter,Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {addNhanVien} from "./redux/ActionCreators.js";
import './App.css';
import NhanVien from "./pages/nhanVien";
import InfomationEmpoyer from "./pages/profileNv";
import BangLuong from "./pages/bangLuong";
import PhongBan from "./pages/./phongBan";
import BotTomUI from "./BotTomUI";
import {
	Navbar,NavbarBrand,Nav,NavbarToggler,Collapse,NavItem,Jumbotron,
	Button,Modal,ModalHeader,ModalBody,
	Form,FormGroup,Input,Label
} from 'reactstrap';
import {NavLink} from 'react-router-dom';
const mapStateToProps=state => {
	return {
		departments: state.departments,
		role: state.role,
		staffs: state.staffs,
	}
}
const mapDispatchToProps=(dispatch) => ({
	addNhanVien: (newStaff,staffId) => dispatch(addNhanVien(newStaff,staffId))
})


// Hien thi title
function AppData(props) {
	const STAFFS=props.staffs
	// useState
	const [staffs,setStaffs]=useState(STAFFS)
	const [isUpdateStaff,setIsUpdateStaff]=useState(false)
	const [isNavOpen,setIsNavOpen]=useState(false)

	const toggleNav=() => {
		setIsNavOpen(!isNavOpen);
	}
	//const addStaff =(newStaff) =>{
const navbarText= {
	textDecoration: 'none',
    fontSize: 20,
	marginRight:30,
}
	//}
	//Ham tim id va vao component thong tin chi tiet nhan vien
	const DetailEmployee=({match}) => {
		const id=parseInt(match.params.id,10)
		const staff=staffs.filter(x => x.id===id)[0];

		return (<InfomationEmpoyer staff={staff}

		/>)
	}

	useEffect(() => {
		if(localStorage.getItem('data')) {
			var data=JSON.parse(localStorage.getItem('data'));
			var set=[...staffs,...data];

			//const addStaff = (data) =>{
			//	let newStaffs= staffs.concat([{
			//		...data
			//	}])
			//let ns = staffs.concat([{
			//	...data,
			//	id: staffs.length + 1,
			//	image: '/assets/images/alberto.jpg',
			//	department: departments.filter(x => x.id === ns.department)[0]
			//  }]);

			//}
			setStaffs(set)/*  */
		}

	},[isUpdateStaff])
	return (<React.Fragment>
		{/* dung router */}
		
			<Navbar dark expand="md" className="p-2 mb-2 bg-primary text-white">
				{/*<div className="col-12 col-sm-6">*/}
				<div className="container">
					<NavbarToggler onClick={toggleNav} />
					{/*<div class="row">*/}
					<NavbarBrand className="mr-auto" href="/">
						<img src="asset/image/hinh-tron-dep_111539274.jpg" height="30" width="41" alt="Avatar" />
					</NavbarBrand>
					<Collapse isOpen={isNavOpen} navbar>
						<Nav navbar>
							<NavItem>
								<NavLink style={navbarText} className="text-white" to="/home"><i  className="fa fa-users" aria-hidden="true"> Nhân Viên</i></NavLink>
							</NavItem>
							<NavItem>
								<NavLink style={navbarText} className="text-white" to="/PhongBan"><i  className="fa fa-address-card-o" aria-hidden="true"></i> Phòng Ban</NavLink>
							</NavItem>
							<NavItem>
								<NavLink style={navbarText } className="text-white" to="/BangLuong"><i  className="fa fa-money" aria-hidden="true"></i> Bảng Lương</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</div>
				{/*</div>*/}
				{/*</div>*/}
			</Navbar>
			<Switch>
				<Redirect exact path="/" to="/home"> </Redirect>
				<Route exact path="/home" component={() => <NhanVien staffs={staffs} setIsUpdateStaff={() => setIsUpdateStaff(!isUpdateStaff)} />} />
				<Route exact path="/home/:id" component={DetailEmployee} />
				<Route exact path="/PhongBan" component={() => < PhongBan />} />
				<Route path="/BangLuong" component={() => <BangLuong />} />
			</Switch>
			<BotTomUI />
	

	</React.Fragment>


	)
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(AppData));
