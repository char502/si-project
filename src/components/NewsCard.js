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
  /* width: 100%; */
  width: 260px;
  @media (max-width: 650px) {
    background-color: seashell;
    width: 100%;
    height: auto;
  }
`;

const NewsImage = styled.img`
  width: 260px;
  height: 146px;
  /* height: auto; */
  object-fit: cover;
  @media (max-width: 650px) {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const NewsMetaDiv = styled.div`
  /* background-color: steelblue; */
  width: 246px;
  height: auto;
  padding: 10px;
  @media (max-width: 650px) {
    /* background-color: steelblue; */
    /* width: 100%; */
    /* width: 260px; */
    height: auto;
  }
`;

const RedCategory = styled.div`
  color: red;
  font-size: 11px;
  margin: 8px 0;

  @media (max-width: 650px) {
    font-weight: 700;
    margin: 15px 0;
  }
`;

const Headline = styled.div`
  /* background-color: lightslategray; */
  font-size: 18px;
  font-weight: 700;
  margin: 8px 0;

  overflow: hidden;
  /* white-space: nowrap; */
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;

  @media (max-width: 650px) {
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
  }
`;

const MainDescription = styled.div`
  /* background-color: lightyellow; */
  font-size: 15px;
  font-weight: 400;
  color: #565656;
  margin: 8px 0;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  /* display: -webkit-box;
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical; */

  @media (max-width: 650px) {
    margin: 15px 0;

    overflow: none;
    white-space: none;
    text-overflow: none;
  }
`;

const WhenPublished = styled.div`
  /* background-color: lightsteelblue; */
  font-size: 11px;
  font-weight: 300;
  color: #7c7c7c;
  margin: 8px 0;
  @media (max-width: 650px) {
    font-size: 12px;
    padding-bottom: 5px;
    margin: 15px 0;
  }
`;

const StyledHr = styled.hr`
  display: none;
  @media (max-width: 650px) {
    color: #e7e7e7;
    /* margin: 10px 0; */
  }
`;

const NewsCard = ({ urlToImage, title, description, publishedAt }) => {
  //   const [newsSources, setNewsSources] = useState([]);

  return (
    <>
      <NewsCardContainer>
        <NewsImageDiv>
          <NewsImage src={urlToImage} />
        </NewsImageDiv>
        <NewsMetaDiv>
          <RedCategory>Red Description</RedCategory>
          <Headline>{title}</Headline>
          <MainDescription>{description}</MainDescription>{' '}
          <WhenPublished>{publishedAt}</WhenPublished>
        </NewsMetaDiv>
      </NewsCardContainer>
      <StyledHr />
    </>
  );
};

export default NewsCard;
