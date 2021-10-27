import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import categories from '../../src/newsSources';

const ContainerDiv = styled.div`
  width: 100%;
`;

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
`;

const StyledLi = styled.li`
  padding: 0 7px;
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 600;
  &:first-child {
    padding-left: 15px;
  }
`;

export const LinkText = styled.a`
  color: ${props => (props.href === props.pathName ? 'red' : '#2A2A2A')};
  text-decoration: ${props =>
    props.href === props.pathName ? 'underline' : 'none'};
`;

const CategoryLinkNav = () => {
  const router = useRouter();

  return (
    <ContainerDiv>
      <StyledUl>
        {categories.map(category => {
          return (
            <StyledLi key={category.id}>
              <Link href={`/category/${category.slug}`} passHref>
                <LinkText pathName={router.asPath}>{category.name}</LinkText>
              </Link>
            </StyledLi>
          );
        })}
      </StyledUl>
    </ContainerDiv>
  );
};

export default CategoryLinkNav;
