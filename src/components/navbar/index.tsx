import React, { FC, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { ROUTES } from '../../utils/constant';
import { NavButton, NavContainer, NavItem } from './style';

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
          active={activeTab === ROUTES.CREATE_CARD}
          onClick={() => toggleTab(ROUTES.CREATE_CARD)}
        >
          Create
        </NavButton>
      </NavItem>
      <NavItem>
        <NavButton
          active={activeTab === ROUTES.COLLECTION}
          onClick={() => toggleTab(ROUTES.COLLECTION)}
        >
          Player List
        </NavButton>
      </NavItem>
    </NavContainer>
  );
};

export default Navbar;
