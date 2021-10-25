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

const NavBar = props => {
  //   const [newsSources, setNewsSources] = useState([]);

  return (
    <NavHeader>
      <TopNavMain>
        <TopMainNav />
      </TopNavMain>
      <hr />
      <Container>
        <div>
          <CategoryLinksNav />
        </div>
        <hr />
      </Container>
    </NavHeader>
  );
};

export default NavBar;
