import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
  justify-content: center;
  align-items: center;

  @media (min-width: 800px) {
    grid-template-columns: repeat(2, minmax(300px, 1fr));
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, minmax(300px, 1fr));
  }

  @media (min-width: 1500px) {
    grid-template-columns: repeat(4, minmax(300px, 1fr));
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 16px;
  margin: 20px 0;
`;
const CardContainer = styled.div`
  color: #007bff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background-color: #1a237e;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  font-family: Kanit, sans-serif;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  select {
    cursor: pointer;
    padding: 8px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-right: 10px;
    width: 200px;
  }

  button {
    padding: 8px 16px;
    font-size: 16px;
    border-radius: 5px;
    background-color: #1a237e;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #152673;
  }
`;

export { GridContainer, ErrorMessage, Button, SelectContainer, CardContainer };
