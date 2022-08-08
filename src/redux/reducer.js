import { DEPARTMENTS } from "../Components/StaffList/staffs.jsx";
import { ROLE } from "../Components/StaffList/staffs.jsx";
import { STAFFS } from "../Components/StaffList/staffs.jsx";
export const initialState = {
	departments:DEPARTMENTS,
	role: ROLE,
	staffs: STAFFS
};

export const Reducer = (state = initialState,action) =>{
	return state
}