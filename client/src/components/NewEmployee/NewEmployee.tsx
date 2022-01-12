import React, {useState, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {Employee} from "../../redux/employeeSlice";
import {Wrapper, Form, Label, Select, Input, Button, Title} from './NewEmployee.styles';
import { addEmployee, updateEmployee } from '../../redux/apiCalls';


const NewEmployee: React.FC<{currentId: number, setCurrentId:any}> = (props) => {
    const [employees, setEmployees] = useState<Employee>({
    name: "",
    dateOfBirth: "",
    gender:"",
    salary:0
    });

    const employee = useAppSelector((state) => props.currentId? state.employee.employees.find((item) => item._id === props.currentId) : null);
    
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(employee) {
            setEmployees(employee);
        }
    }, [employee]);


    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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

    const handleSumbit = (e:React.FormEvent) => {
        e.preventDefault();
        if(props.currentId !== 0){
            updateEmployee(props.currentId, employees, dispatch);
        }
        else {
            addEmployee(employees, dispatch);
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