import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import NavBar from '../components/Navbar';

const ContentWrapper = styled.div`
  /* background-color: lightgray; */
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <ContentWrapper>{children}</ContentWrapper>
    </>
  );
};

export default Layout;
