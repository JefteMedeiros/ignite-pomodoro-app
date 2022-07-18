import React from "react";
import { HeaderContainer } from "./styles";
import {Timer, Scroll} from 'phosphor-react';

import logoIgnite from "../../assets/ignite-logo.svg";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt=""/>
      <nav>
        <NavLink to="/" title="Temporizador">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
