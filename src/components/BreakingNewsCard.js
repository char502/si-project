import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const BreakingNewsCardContainer = styled.div`
  /* background-color: pink; */
`;

const Title = styled.div`
  /* background-color: lightyellow; */
  margin: 15px 0;
  font-family: Poppins;
  font-weight: 700;
`;

const NewsImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const RedDescription = styled.div`
  background-color: lightgreen;
`;

const MainTitle = styled.div`
  background-color: lightslategray;
`;

const MainDescription = styled.div`
  background-color: lightyellow;
`;

const WhenPublished = styled.div`
  background-color: lightsteelblue;
`;

const BreakingNewsCard = ({ urlToImage, title, description, publishedAt }) => {
  //   const [newsSources, setNewsSources] = useState([]);

  return (
    <BreakingNewsCardContainer>
      <NewsImage src={urlToImage} />
      <RedDescription>Red Description</RedDescription>
      <MainTitle>{title}</MainTitle>
      <MainDescription>{description}</MainDescription>{' '}
      {/* Not included in smaller cards */}
      <WhenPublished>{publishedAt}</WhenPublished>
    </BreakingNewsCardContainer>
  );
};

export default BreakingNewsCard;
