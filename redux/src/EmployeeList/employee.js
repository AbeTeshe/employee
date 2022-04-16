import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: white;
    width: 600px;
    text-align: center;
    padding: 10px;
    border-radius: 10px;
    @media only screen and (max-width: 1000px){
        margin-top: 20px;
      }
`;
export const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin-top: 10px;
`;
export const Table = styled.table`
   width: 100%;
   font-family: 'Roboto', sans-serif;
   border-collapse: collapse;
   margin: 10px;
`;

export const Td = styled.td`
   text-align: left;
   padding: 8px;
   padding-right: 30px;
   font-family: 'Roboto', sans-serif;
`;

export const Th = styled.th`
    text-align: left;
    font-family: 'Roboto', sans-serif;
    padding: 8px;
    padding-right: 30px;
`;