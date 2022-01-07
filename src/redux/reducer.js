import { DEPARTMENTS,ROLE,STAFFS } from "../Components/StaffList/staffs.jsx";
import * as ActionTypes from "./ActionsTypes";


export const Departments = (state = DEPARTMENTS, action) =>{
	switch(action.type) {
		default:
		return state
	}
}

export const Role = (state = ROLE, action) =>{
	switch(action.type) {
		default:
		return state
	}
}

export const Staffs = (state = STAFFS, action) =>{
	switch(action.type) {
		case ActionTypes.ADD_NHANVIEN:
			var newStaff = action.payload
			newStaff.id = state.length;
			return state.concat(newStaff)
		default:
		return state
	}
}