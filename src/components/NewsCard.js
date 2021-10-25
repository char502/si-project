import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const NewsCardContainer = styled.div`
  /* max-width: 560px; */
  margin: 30px auto;
  /* background-color: pink; */
`;

// const Title = styled.div`
//   /* background-color: lightyellow; */
//   margin: 15px 0;
//   font-family: Poppins;
//   font-weight: 700;
// `;

const NewsImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const RedCategory = styled.div`
  background-color: lightgreen;
`;

const Headline = styled.div`
  /* background-color: lightslategray; */
  font-size: 24px;
  font-weight: 700;
`;

const MainDescription = styled.div`
  background-color: lightyellow;
`;

const WhenPublished = styled.div`
  background-color: lightsteelblue;
  padding-bottom: 5px;
`;

const NewsCard = ({ urlToImage, title, description, publishedAt }) => {
  //   const [newsSources, setNewsSources] = useState([]);

  return (
    <NewsCardContainer>
      <NewsImage src={urlToImage} />
      <RedCategory>Red Description</RedCategory>
      <Headline>{title}</Headline>
      <MainDescription>{description}</MainDescription>{' '}
      {/* Not included in smaller cards */}
      <WhenPublished>{publishedAt}</WhenPublished>
      <hr />
    </NewsCardContainer>
  );
};

export default NewsCard;
