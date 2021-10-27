import React from 'react';
import TopMainNav from '../components/TopMainNav';
import CategoryLinksNav from '../components/CategoryLinkNav';

import styled from 'styled-components';

const NavHeader = styled.div``;

const TopNavMain = styled.div`
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  max-width: 560px;
  margin: 0 auto;

  @media (max-width: 700px) {
    overflow: auto;
    ::-webkit-scrollbar {
      width: 0;
    }
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
  }
`;

const StyledHr = styled.hr`
  border-top: 1px solid #e7e7e7;
`;

const StyledHrPadding = styled.hr`
  margin: 0 0 0 15px;
  border-top: 1px solid #e7e7e7;
`;

const NavBar = props => {
  return (
    <NavHeader>
      <TopNavMain>
        <TopMainNav />
      </TopNavMain>
      <StyledHr />
      <Container>
        <Container>
          <CategoryLinksNav />
        </Container>
        <StyledHrPadding />
      </Container>
    </NavHeader>
  );
};

export default NavBar;
