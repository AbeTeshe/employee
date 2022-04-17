import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Wrapper, Form, Label, Select, Input, Button, Title} from './NewEmployee';
import {useAddEmployeeMutation, useGetEmployeeQuery, useUpdateEmployeeMutation} from "../redux/employeeApi";
import { toast } from 'react-toastify';
import {useParams, useNavigate}  from "react-router-dom";

const NewEmployee = () => {
    const [employees, setEmployees] = useState({
    name: "",
    dateOfBirth: "",
    gender:"",
    salary:0
    });
    const [editMode, setEditMode] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();
    console.log(id);

    const [addEmployee] = useAddEmployeeMutation();
    const [updateEmployee] = useUpdateEmployeeMutation();
    const {data} = useGetEmployeeQuery(id);
  


    useEffect(() => {
        if(id) {
            setEditMode(true);
            if(data){
                setEmployees(data);
            }
        }
        else {
            setEditMode(false);
        }
    }, [id, data]);

    
    const handleChange = (e) => {
        setEmployees((prev) => {
            return {...prev, [e.target.name]:e.target.value}
        });
        
    }

    const clear = () => {
        setEmployees({
            name:"", dateOfBirth: "", gender: "", salary: 0
        });
    }

    const handleSumbit = async (e) => {
        e.preventDefault();
        if(!editMode){
            await addEmployee(employees);
            navigate("/");
            toast.success("Employee Added Successfully");
        }
        else {
            await updateEmployee( {id, ...employees});
            navigate("/");
            toast.success("Employee Updated Successfully");
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
                <Button type="submit">{id ? 'Update Employee': 'Add Employee'}</Button>
            </Form>
        </Wrapper>
    )
       
}

export default NewEmployee;