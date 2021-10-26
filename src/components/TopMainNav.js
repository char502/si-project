import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MagGlass from '../components/graphics/MagGlass';

const ContainerDiv = styled.div`
  width: 100%;
  /* background-color: lightgoldenrodyellow; */
  /* margin: 0 auto; */
`;

const NavItemsDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px 0 5px 0;
  /* margin: 10px 0 10px 100px; */
`;

const MobileHamburger = styled.div`
  /* display: none; */
  @media (max-width: 700px) {
    display: none;
  }
`;

const AppHeading = styled.div`
  padding-left: 100px;
  white-space: nowrap;
  @media (max-width: 700px) {
    padding-left: 20px;
  }
`;

const RedLineStyle = styled.span`
  color: red;
  font-weight: 900;
`;

const TitleStyleSpan = styled.span`
  font-family: times-new-roman;
  font-size: 25px;
  font-weight: 600;
  /* @media (max-width: 700px) {
    display: none;
  } */
`;

const SubNavItems = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 700px) {
    display: none;
  }
`;

const MagGlassImageDiv = styled.div`
  width: 15px;
  height: 15px;
`;

const NewsletterDiv = styled.div`
  font-family: Poppins;
  font-weight: 600;
  font-size: 14px;
  margin: 0 10px;
`;

const SignIn = styled.div`
  font-family: Poppins;
  font-weight: 600;
  font-size: 14px;
  margin: 0 10px;
`;
const Subscribe = styled.button`
  font-family: Poppins;
  font-weight: 600;
  background: red;
  color: white;
  border-radius: 50px;
  font-size: 14px;
  padding: 2px 15px;
  margin: 0 10px;
  border: none;
  cursor: pointer;
`;

const MagnifyingGlass = styled.button`
  font-size: 14px;
  margin: 0 10px;
  background: none;
  border: none;
  cursor: pointer;
  @media (max-width: 700px) {
    padding-left: 20px;
  }
`;

const TopMainNav = props => {
  //   const [newsSources, setNewsSources] = useState([]);

  return (
    <ContainerDiv>
      <NavItemsDiv>
        <MobileHamburger>Mobile Hamburger</MobileHamburger>
        <AppHeading>
          <RedLineStyle>__ </RedLineStyle>
          <TitleStyleSpan>Anderson Post</TitleStyleSpan>
        </AppHeading>
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
