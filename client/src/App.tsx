import { useState } from 'react';
import EmployeeList from './components/EmployeeList/EmployeeList';
import NewEmployee from './components/NewEmployee/NewEmployee';
import styled from 'styled-components';

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
  const [currentId, setCurrentId] = useState<number>(0);

  return (
    <Wrapper>
      <NewEmployee currentId={currentId} setCurrentId={setCurrentId}/>
      <EmployeeList  setCurrentId = {setCurrentId}/>
    </Wrapper>
  );
}

export default App;
