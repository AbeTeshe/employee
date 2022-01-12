import React, {useEffect } from 'react';
import { Wrapper, Table, Td, Th, Title } from './EmployeeList.styles';
import {Delete, Edit} from '@mui/icons-material'
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {deleteEmployee, getEmployee} from "../../redux/apiCalls";
import moment from 'moment';


const EmployeeList: React.FC<{setCurrentId: any}> = (props) => {
    

    const employees = useAppSelector((state) => state.employee.employees);
    const dispatch = useAppDispatch();

    useEffect(() => {
        getEmployee(dispatch);
    },[dispatch]);

    const handleDelete =(id: number) => {
        deleteEmployee(id, dispatch);
    }

    const getTime = (date: string) => {
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
               {employees.map((emp) => (<tr>
                    <Td>{emp.name}</Td>
                    <Td>{getTime(emp.dateOfBirth)}</Td>
                    <Td>{emp.gender}</Td>
                    <Td>{emp.salary}</Td>
                    <Td><Delete style={{color: 'red'}} onClick={() => handleDelete(emp._id as number)}/></Td>
                    <Td><Edit style={{color: 'green'}} onClick={() => props.setCurrentId(emp._id as number)}/></Td>
                </tr>))}
           </Table>
        </Wrapper>
    )
}

export default EmployeeList;