import React, { FC, useState } from 'react';
import { NavButton, NavContainer, NavItem } from './style';
import { useHistory, useLocation } from 'react-router-dom';

const Navbar: FC = () => {
  const location = useLocation();
  const history = useHistory();
  const [activeTab, setActiveTab] = useState(location.pathname);

  const toggleTab = (tab: string) => {
    if (activeTab !== tab) setActiveTab(tab);
    history.push(`${tab}`);
  };

  return (
    <NavContainer>
      <NavItem>
        <NavButton
          active={activeTab === '/create-card'}
          onClick={() => {
            toggleTab('/create-card');
          }}
        >
          Create
        </NavButton>
      </NavItem>
      <NavItem>
        <NavButton
          active={activeTab === '/collection'}
          onClick={() => {
            toggleTab('/collection');
          }}
        >
          Player List
        </NavButton>
      </NavItem>
    </NavContainer>
  );
};

export default Navbar;
