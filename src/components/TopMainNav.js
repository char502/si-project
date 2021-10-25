import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import AndersonTitle from '../components/graphics/AndersonTitle';
// import AndersonLine from '../components/graphics/AndersonLine';
import MagGlass from '../components/graphics/MagGlass';

const ContainerDiv = styled.div`
  width: 100%;
  background-color: lightgoldenrodyellow;
  /* margin: 0 auto; */
`;

const NavItemsDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px 0;
  /* margin: 10px 0 10px 100px; */
`;

const SubNavItems = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 650px) {
    display: none;
  }
`;

const AndersonImageDiv = styled.div`
  width: 180px;
  height: 20px;
`;

// const AndersonLine = styled;

// const RedLineForAndersonImage = styled.span`
//   color: red;
// `;

const MagGlassImageDiv = styled.div`
  width: 15px;
  height: 15px;
`;

const NewsletterDiv = styled.div`
  font-size: 14px;
  margin: 0 10px;
`;

const SignIn = styled.div`
  font-size: 14px;
  margin: 0 10px;
`;
const Subscribe = styled.button`
  background: red;
  color: white;
  border-radius: 50px;
  font-size: 14px;
  padding: 2px 15px 2px 15px;
  margin: 0 10px;
  border: none;
`;

const MagnifyingGlass = styled.button`
  font-size: 14px;
  margin: 0 10px;
  background: none;
  border: none;
`;

const TopMainNav = props => {
  //   const [newsSources, setNewsSources] = useState([]);

  return (
    <ContainerDiv>
      <NavItemsDiv>
        <div>Mobile Hamburger</div>
        <div>
          <AndersonImageDiv>
            <span>
              <AndersonTitle />
            </span>
          </AndersonImageDiv>
        </div>
        <SubNavItems>
          <NewsletterDiv>Newsletter</NewsletterDiv>
          <SignIn>Sign In</SignIn>
          <Subscribe>Subscribe</Subscribe>
          <MagnifyingGlass>
            <MagGlassImageDiv>
              <MagGlass />
            </MagGlassImageDiv>
          </MagnifyingGlass>
        </SubNavItems>
      </NavItemsDiv>
    </ContainerDiv>
  );
};

export default TopMainNav;

{
  /* <ul style={{ listStyle: 'none', display: 'flex' }}>
        {['Anderson Post', 'Newsletter', 'Sign In', 'Subscribe'].map(
          (navItem, i) => {
            return (
              <li key={i} style={{ margin: '0 5px' }}>
                {navItem}
              </li>
            );
          }
        )}
      </ul> */
}
