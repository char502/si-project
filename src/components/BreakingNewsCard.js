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
  /* background-color: lightpink; */
  color: red;
  font-weight: 700;
  margin: 15px 0;
`;

const MainHeadline = styled.div`
  /* background-color: lightslategray; */
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`;

const MainDescription = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: darkgray;
  margin: 15px 0;
`;

const WhenPublished = styled.div`
  /* background-color: lightsteelblue; */
  font-size: 12px;
  font-weight: 300;
  color: lightgrey;
  margin: 15px 0;
`;

const BreakingNewsCard = ({ urlToImage, title, description, publishedAt }) => {
  //   const [newsSources, setNewsSources] = useState([]);

  return (
    <BreakingNewsCardContainer>
      <NewsImage src={urlToImage} />
      <RedDescription>Red Description</RedDescription>
      <MainHeadline>{title}</MainHeadline>
      <MainDescription>{description}</MainDescription>{' '}
      {/* Not included in smaller cards */}
      <WhenPublished>{publishedAt}</WhenPublished>
    </BreakingNewsCardContainer>
  );
};

export default BreakingNewsCard;
