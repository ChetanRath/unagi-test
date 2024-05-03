import styled from 'styled-components';
import { ButtonProps } from '../../utils/type';

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow */
`;

const NavItem = styled.div`
  margin-right: 20px;
`;

const NavButton = styled.button<ButtonProps>`
  background-color: ${(props) => (props.active ? '#1a237e' : 'transparent')};
  color: ${(props) => (props.active ? '#fff' : '#1a237e')};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  font-family: Kanit, sans-serif;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.active ? '#0056b3' : '#f0f0f0')};
    color: ${(props) => (props.active ? '#fff' : '#007bff')};
  }
`;

export { NavButton, NavContainer, NavItem };
