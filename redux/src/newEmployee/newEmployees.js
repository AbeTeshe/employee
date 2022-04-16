import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
//import {Employee} from "../../redux/employeeSlice";
import {Wrapper, Form, Label, Select, Input, Button, Title} from './NewEmployee';
// import { addEmployee, updateEmployee } from '../../redux/apiCalls';
import {useAddEmployeeMutation, useGetEmployeeQuery, useUpdateEmployeeMutation} from "../redux/employeeApi";
import { toast } from 'react-toastify';

const NewEmployee = (props) => {
    const [employees, setEmployees] = useState({
    name: "",
    dateOfBirth: "",
    gender:"",
    salary:0
    });

    const [addEmployee] = useAddEmployeeMutation();
    const [updateEmployee] = useUpdateEmployeeMutation();
    const {data, error, isLoading} = useGetEmployeeQuery(props.currentId);

    useEffect(() => {
        if(data) {
            setEmployees(data);
        }
    }, [data]);

    
    const handleChange = (e) => {
        setEmployees((prev) => {
            return {...prev, [e.target.name]:e.target.value}
        });
        
    }

    const clear = () => {
        props.setCurrentId(0);
        setEmployees({
            name:"", dateOfBirth: "", gender: "", salary: 0
        });
    }

    const handleSumbit = async (e) => {
        e.preventDefault();
        if(props.currentId !== 0){
            await updateEmployee( employees);
            toast.success("Employee Updated Successfully");
        }
        else {
            await addEmployee(employees);
            toast.success("Employee Added Successfully");
        }
        clear();
    }
    
    return (
        <Wrapper>
            <Title>Add Employee Form</Title>
            <Form onSubmit={handleSumbit}>
                <Label htmlFor='name'>Name</Label>
                <Input type="text" id="name" name="name" value={employees.name} onChange={handleChange} />
                <Label htmlFor='dateOfBirth'>Date of Birth</Label>
                <Input type="date" id="dateOfBirth" name="dateOfBirth" value={employees.dateOfBirth} onChange={handleChange}/>
                <Label htmlFor='gender'>Gender</Label>
                <Select  id="gender" name="gender" value={employees.gender} onChange={handleChange}>
                    <option>Select Gender</option>
                    <option value="M">M</option>
                    <option value="F">F</option>
                </Select>
                <Label htmlFor='salary'>Salary</Label>
                <Input type="number" id="salary" name="salary" value={employees.salary} onChange={handleChange}/>
                <Button type="submit">{props.currentId ? 'Update Employee': 'Add Employee'}</Button>
            </Form>
        </Wrapper>
    )
       
}

export default NewEmployee;