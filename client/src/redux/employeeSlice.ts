import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface Employee {
    _id?: number,
    name: string,
    dateOfBirth: string,
    gender:string,
    salary: number;
}

export interface EmployeeSliceState {
    employees: Employee[];
}

const initialState: EmployeeSliceState ={
    employees: [],
}


const employeeSlice = createSlice({
    name: "employee",
    initialState,
    reducers: {
        //GET ALL
        getEmployeeSuccess(state, action: PayloadAction<Employee[]>)  {
            state.employees = action.payload;
        },

        //DELETE 
        deleteEmployeeSuccess: (state, action: PayloadAction<number>) => {
            state.employees.splice (
                state.employees.findIndex((item) => item._id === action.payload), 1
            );
        },

        //UPDATE
        updateEmployeeSuccess: (state, action: PayloadAction<Employee>) => {
            state.employees[state.employees.findIndex((item) => item._id === action.payload._id)]
                = action.payload;
        },

        //ADD
        addEmployeeSuccess: (state, action: PayloadAction<Employee>) => {
            state.employees.push(action.payload);
        }
    }
});

export const {getEmployeeSuccess, deleteEmployeeSuccess, updateEmployeeSuccess, addEmployeeSuccess} = employeeSlice.actions;

export default employeeSlice.reducer;