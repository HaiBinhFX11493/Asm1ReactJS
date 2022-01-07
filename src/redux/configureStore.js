import { createStore,combineReducers } from "redux";
import { Departments,Role,Staffs } from "./reducer";
export const ConfigureStore =  () =>{
	const store = createStore(
		combineReducers({
			departments: Departments,
			role: Role,
			staffs: Staffs,
		})
	);
	
	return store
}