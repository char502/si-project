import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Router, useRouter } from 'next/router';

import categories from '../../src/newsSources';

const ContainerDiv = styled.div`
  /* max-width: 100%; */
  /* max-width: 560px; */
  width: 100%;
`;

const StyledUl = styled.ul`
  /* width: 100%; */
  list-style: none;
  display: flex;
  padding: 0;
`;

const StyledLi = styled.li`
  /* background-color: lightcyan; */
  /* max-width: 100%; */
  padding: 0 7px;
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 600;
  &:first-child {
    padding-left: 15px;
  }
`;

// export const LinkText = styled.a`
//   color: ${props => (props.href === props.pathName ? 'green' : '#2A2A2A')};
// `;

const CategoryLinkNav = props => {
  const router = useRouter();
  //   const [newsSources, setNewsSources] = useState([]);
  // test
  console.log(router);

  return (
    <ContainerDiv>
      <StyledUl style={{ listStyle: 'none', display: 'flex', padding: '0' }}>
        {categories.map(category => {
          // return <li key={category.id} style={{margin: '0 5px' }}>{category.name}</li>;
          return (
            <StyledLi key={category.id}>
              <Link href={`/category/${category.slug}`}>
                <a>{category.name}</a>
              </Link>
            </StyledLi>
          );
        })}
      </StyledUl>
    </ContainerDiv>
  );
};

export default CategoryLinkNav;
