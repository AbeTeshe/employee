import { useState } from 'react';
import EmployeeList from './EmployeeList/EmployeeList';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import styled from 'styled-components';
import NewEmployee from './newEmployee/newEmployees';

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
  const [currentId, setCurrentId] = useState(0);

  return (
      <Wrapper>
        <ToastContainer />
        <NewEmployee currentId={currentId} setCurrentId={setCurrentId}/>
        <EmployeeList  setCurrentId = {setCurrentId}/>
      </Wrapper>
    
  );
}

export default App;
