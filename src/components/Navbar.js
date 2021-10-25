import React, { useState, useEffect } from 'react';

import TopMainNav from '../components/TopMainNav';
import CategoryLinksNav from '../components/CategoryLinkNav';

import styled from 'styled-components';

const NavHeader = styled.div`
  background-color: lightcyan;
`;

const TopNavMain = styled.div`
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  max-width: 560px;
  margin: 0 auto;
`;

const StyledHr = styled.hr`
  border-top: 1px solid #e7e7e7;
`;

const NavBar = props => {
  //   const [newsSources, setNewsSources] = useState([]);

  return (
    <NavHeader>
      <TopNavMain>
        <TopMainNav />
      </TopNavMain>
      <StyledHr />
      <Container>
        <div>
          <CategoryLinksNav />
        </div>
        <StyledHr />
      </Container>
    </NavHeader>
  );
};

export default NavBar;
