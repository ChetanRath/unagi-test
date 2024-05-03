import styled from 'styled-components';

const CreateCardFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 64px);
  background-color: #f2f2f2;
`;

const CreateCardForm = styled.form`
  background-color: #ffffff;
  padding: 40px;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const FieldGroup = styled.section`
  width: 100%;
  margin-bottom: 20px;
`;

const CardHeading = styled.h2`
  color: #1a237e;
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #1a237e;
  color: #fff;
  border: none;
  padding: 12px 24px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  font-family: Kanit, sans-serif;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export {
  CreateCardFormContainer,
  CardHeading,
  CreateCardForm,
  FieldGroup,
  Label,
  Input,
  Button,
};
