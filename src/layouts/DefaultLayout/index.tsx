import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import { LayoutContainer } from './styles';

const Layout: React.FC = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
}

export default Layout;