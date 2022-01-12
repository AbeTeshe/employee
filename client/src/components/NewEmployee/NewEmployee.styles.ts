import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 400px;
    text-align: center;
    max-height: 430px;
    background-color: white;
    margin-right: 50px;
    border-radius: 10px;
`;

export const Form = styled.form`
    margin: 20px;
`;

export const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin-top: 20px;
`;

export const Label = styled.label`
    text-align: left;
    display: block;
    font-family: 'Roboto', sans-serif;
`;

export const Select = styled.select`
    width: 100%;
    padding: 8px 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    box-sizing: border-box;
    display: block;
`
export const Input = styled.input`
    width: 100%;
    padding: 8px 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    box-sizing: border-box;
    display: block;
    
`;

export const Button = styled.button`
   width: 200px;
   margin: 5px auto;
   background-color: green;
   padding: 10px 30px;
   color: white;
   cursor: pointer;
   border: none;
   border-radius: 5px;
`;