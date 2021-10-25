import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const NewsCardContainer = styled.div`
  display: flex;

  /* max-width: 560px; */
  margin: 30px auto;
  /* background-color: pink; */
  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
  }
`;

const NewsImageDiv = styled.div`
  background-color: seashell;
  width: 100%;
  @media (max-width: 650px) {
    background-color: seashell;
    width: 100%;
    height: 146px;
  }
`;

const NewsImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const NewsMetaDiv = styled.div`
  background-color: steelblue;
  width: 100%;
  @media (max-width: 650px) {
    background-color: steelblue;
    width: 100%;
    /* width: 260px; */
    height: 146px;
  }
`;

const RedCategory = styled.div`
  /* background-color: lightpink; */
  color: red;
  font-weight: 700;
  margin: 15px 0;
`;

const Headline = styled.div`
  /* background-color: lightslategray; */
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`;

const MainDescription = styled.div`
  /* background-color: lightyellow; */
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
  padding-bottom: 5px;
  margin: 15px 0;
`;

const StyledHr = styled.hr`
  color: #e7e7e7;
`;

const NewsCard = ({ urlToImage, title, description, publishedAt }) => {
  //   const [newsSources, setNewsSources] = useState([]);

  return (
    <NewsCardContainer>
      <NewsMetaDiv>
        {/* <RedCategory>Red Description</RedCategory>
      <Headline>{title}</Headline>
      <MainDescription>{description}</MainDescription>{' '}
      <WhenPublished>{publishedAt}</WhenPublished> */}
      </NewsMetaDiv>
      <NewsImageDiv>{/* <NewsImage src={urlToImage} /> */}</NewsImageDiv>
      <StyledHr />
    </NewsCardContainer>
  );
};

export default NewsCard;
