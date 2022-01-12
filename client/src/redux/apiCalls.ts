import {Dispatch} from "redux";
import { AnyAction
 } from "redux";
import { request } from "../requestMethod";
import { Employee, addEmployeeSuccess, deleteEmployeeSuccess, getEmployeeSuccess, updateEmployeeSuccess } from "./employeeSlice";


export const getEmployee = async (dispatch: Dispatch<AnyAction>) => {
    try {
        const res = await request.get("/employee");
        dispatch(getEmployeeSuccess(res.data));
    } catch (err) {
        console.log(err);
    }
};

export const addEmployee = async(employee:Employee, dispatch: Dispatch<AnyAction>) => {
    try {
        const res = await request.post("/employee", employee);
        dispatch(addEmployeeSuccess(res.data));
    } catch (err) {
        console.log(err);
    }
}

export const deleteEmployee = async(id:number, dispatch: Dispatch<AnyAction>) => {
    try {
        await request.delete(`/employee/${id}`);
        dispatch(deleteEmployeeSuccess(id));
    } catch (err) {
        console.log(err);
    }
};

export const updateEmployee = async (id:number, employee:Employee, dispatch: Dispatch<AnyAction>) => {
    try {
        const res = await request.put(`/employee/${id}`, employee);
        dispatch(updateEmployeeSuccess(res.data));
    } catch (err) {
        
    }
}