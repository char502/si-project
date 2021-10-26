import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import imagePlaceholder from '../../public/Images/imagePlaceholder.png';

const NewsCardContainer = styled.div`
  display: flex;
  /* max-width: 560px; */
  margin: 30px auto;
  /* background-color: pink; */

  /* > *:nth-child(odd) {
    flex-direction: row-reverse;
  } */

  /* > *:nth-child(even) {
    flex-direction: row;
  }
  > *:nth-child(odd) {
    flex-direction: row-reverse;
  } */

  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
  }
`;

const NewsImageDiv = styled.div`
  /* background-color: seashell; */
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
  object-fit: cover;

  @media (max-width: 650px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const NewsMetaDiv = styled.div`
  /* background-color: steelblue; */
  width: 246px;
  height: auto;
  padding: 0 0 0 15px;

  @media (max-width: 650px) {
    /* background-color: steelblue; */
    padding: 0;
    width: 100%;
    height: auto;
  }
`;

const RedCategory = styled.div`
  font-family: Poppins;
  color: #f02f23;
  font-size: 11px;
  margin: 8px 0;
  font-weight: 700;

  @media (max-width: 650px) {
    margin: 15px 0;
  }
`;

const Headline = styled.div`
  /* background-color: lightslategray; */
  font-family: Poppins;
  color: #2a2a2a;
  font-size: 18px;
  font-weight: 600;
  margin: 8px 0;
  overflow: hidden;
  /* white-space: nowrap; */
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height: 22px;

  @media (max-width: 650px) {
    font-size: 24px;
    /* font-weight: 700; */
    margin: 15px 0;
    line-height: 30px;
  }
`;

const MainDescription = styled.div`
  display: none;

  @media (max-width: 650px) {
    font-family: Poppins;
    margin: 15px 0;

    font-size: 15px;
    font-weight: 400;
    color: #565656;
    margin: 8px 0;

    overflow: hidden;
    /* white-space: nowrap; */
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

const WhenPublished = styled.div`
  /* background-color: lightsteelblue; */
  font-family: Poppins;
  font-size: 11px;
  font-weight: 300;
  color: #7c7c7c;
  margin: 8px 0 0 0;

  @media (max-width: 650px) {
    font-size: 12px;
    padding-bottom: 5px;
    margin: 15px 0 0 0;
  }
`;

const StyledHr = styled.hr`
  border-top: 1px solid #e7e7e7;
`;

const NewsCard = ({ urlToImage, title, description, publishedAt }) => {
  //   const [newsSources, setNewsSources] = useState([]);

  return (
    <>
      <NewsCardContainer>
        <NewsImageDiv>
          <NewsImage src={urlToImage} />
          {/* placeholder If no image available */}
          {/* <Image src={imagePlaceholder} alt='placeholder' /> */}
          {/* <NewsImage
            src={
              urlToImage ? (
                urlToImage
              ) : (
                <Image src={imagePlaceholder} alt='placeholder' />
              )
            }
          /> */}
        </NewsImageDiv>
        <NewsMetaDiv>
          <RedCategory>Category</RedCategory>
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
