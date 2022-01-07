import * as ActionTypes from "./ActionsTypes";

export const addNhanVien = (newStaff,staffId) => ({
    type: ActionTypes.ADD_NHANVIEN,
    payload: newStaff,
	staffId: staffId, 
});