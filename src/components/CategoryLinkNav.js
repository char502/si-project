import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import categories from '../../src/newsSources';

const CategoryLinkNav = props => {
  //   const [newsSources, setNewsSources] = useState([]);

  return (
    <div>
      <ul style={{ listStyle: 'none', display: 'flex' }}>
        {categories.map(category => {
          // return <li key={category.id} style={{margin: '0 5px' }}>{category.name}</li>;
          return (
            <li
              key={category.id}
              style={{
                margin: '0 5px',
                fontFamily: 'Monserrat',
                fontWeight: '500',
              }}
            >
              <Link href={`/category/${category.slug}`}>
                <a>{category.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryLinkNav;
