import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';

const TopMainNav = props => {
  //   const [newsSources, setNewsSources] = useState([]);

  return (
    <div>
      <ul style={{ listStyle: 'none', display: 'flex' }}>
        {['Anderson Post', 'Newsletter', 'Sign In', 'Subscribe'].map(
          (navItem, i) => {
            return (
              <li key={i} style={{ margin: '0 5px' }}>
                {navItem}
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default TopMainNav;
