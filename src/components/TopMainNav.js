import React, { useState, useEffect } from 'react';
import { ReactElement } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import MagGlass from '../components/graphics/MagGlass';
import Link from 'next/link';

// fas fa-bars

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
  @media (max-width: 700px) {
    justify-content: space-between;
  }
`;

const MobileHamburger = styled.div`
  /* background-color: lightskyblue; */
  /* display: none; */
  color: white;
  @media (max-width: 700px) {
    /* display: none; */
    color: black;
    padding: 0 15px;
  }
`;

const AppHeading = styled.div`
  /* background-color: lightgrey; */
  margin-left: 400px;
  white-space: nowrap;
  @media (max-width: 700px) {
    margin-left: 0;
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

// const SubNavWithMag = styled.div`
//   display: flex;
// `;

const SubNavItems = styled.div`
  /* background-color: lightseagreen; */
  padding-left: 200px;
  /* display: flex; */
  display: flex;
  /* justify-content: space-evenly; */
  @media (max-width: 1265px) {
    padding-left: 160px;
  }
  @media (max-width: 1235px) {
    padding-left: 120px;
  }
  @media (max-width: 1190px) {
    padding-left: 60px;
  }
  @media (max-width: 1165px) {
    padding-left: 80px;
  }
  @media (max-width: 1033px) {
    padding-left: 40px;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

const MagGlassImageDiv = styled.div`
  /* background-color: cyan; */
  /* background-color: cyan; */
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
  return (
    <ContainerDiv>
      <NavItemsDiv>
        <MobileHamburger>
          <FontAwesomeIcon icon={faBars} />
        </MobileHamburger>
        <AppHeading>
          <Link href='/'>
            <a>
              <RedLineStyle>__ </RedLineStyle>
              <TitleStyleSpan>Anderson Post</TitleStyleSpan>
            </a>
          </Link>
        </AppHeading>
        {/* <SubNavWithMag> */}
        <SubNavItems>
          <NewsletterDiv>Newsletter</NewsletterDiv>
          <SignIn>Sign In</SignIn>
          <Subscribe>Subscribe</Subscribe>
        </SubNavItems>
        <MagnifyingGlass>
          <MagGlassImageDiv>
            <MagGlass />
          </MagGlassImageDiv>
        </MagnifyingGlass>
        {/* </SubNavWithMag> */}
      </NavItemsDiv>
    </ContainerDiv>
  );
};

export default TopMainNav;
