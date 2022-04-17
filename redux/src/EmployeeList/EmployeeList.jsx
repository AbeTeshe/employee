import React, {useEffect } from 'react';
import { Wrapper, Table, Td, Th, Title } from './employee';
import {useGetEmployeeListQuery, useDeleteEmployeeMutation} from "../redux/employeeApi";
//import {useSelector, useDispatch} from "react-redux";
//import {deleteEmployee, getEmployee} from "../../redux/apiCalls";
import moment from 'moment';
import {toast} from 'react-toastify';
import { Link } from 'react-router-dom';


const EmployeeList = ()  => {
    //const employees = useSelector((state) => state.employee.employees);

    const {data, error, isLoading} = useGetEmployeeListQuery();
    const [deleteEmployee] = useDeleteEmployeeMutation();

    //const dispatch = useDispatch();

    useEffect(() => {
        if(error) {
            toast.error("something went wrong!");
        }
    },[error]);

    const handleDelete =async (id) => {
        await deleteEmployee(id);
        toast.success("Contact Deleted Successfully");
    }

    const getTime = (date) => {
        return moment.utc(date).format("MMM DD, YYYY");
    };


    return (
        <Wrapper>
        <Title>Employee List</Title>
        <Table>
            <tr>
                <Th>Name</Th>
                <Th>Date of Birth</Th>
                <Th>Gender</Th>
                <Th>Salary</Th>
            </tr>
            {data?.map((emp) => (<tr>
                <Td>{emp.name}</Td>
                <Td>{getTime(emp.dateOfBirth)}</Td>
                <Td>{emp.gender}</Td>
                <Td>{emp.salary}</Td>
                <Td><button style={{color: 'red'}} onClick={() => handleDelete(emp._id)}>Delete</button></Td>
                <Td><Link to={`/update/${emp._id}`}>
                    <button style={{color: 'green'}} >Edit</button>
                </Link></Td>
            </tr>))}
        </Table>
        </Wrapper>
    )
}

export default EmployeeList;