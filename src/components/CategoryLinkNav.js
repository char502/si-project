import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import categories from '../../src/newsSources';

const StyledLi = styled.li`
  padding: 0 7px;
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 400;
  &:first-child {
    padding-left: 0;
  }
`;

const CategoryLinkNav = props => {
  //   const [newsSources, setNewsSources] = useState([]);

  return (
    <div>
      <ul style={{ listStyle: 'none', display: 'flex', padding: '0' }}>
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
      </ul>
    </div>
  );
};

export default CategoryLinkNav;
