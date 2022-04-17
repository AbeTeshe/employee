import { useState } from 'react';
import EmployeeList from './EmployeeList/EmployeeList';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import styled from 'styled-components';
import NewEmployee from './newEmployee/newEmployees';
import { Route, Routes } from 'react-router-dom';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 100px;
    @media only screen and (max-width: 1000px){
      flex-direction: column;
      margin-left: 20px;
      align-items: center;
    }
`;

function App() {
 

  return (
      <Wrapper>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/add" element={<NewEmployee />} />
          <Route path="/update/:id" element={<NewEmployee />} />
        </Routes>
      </Wrapper>
    
  );
}

export default App;
