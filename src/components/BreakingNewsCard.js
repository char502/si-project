import React from 'react';
import styled from 'styled-components';

const BreakingNewsCardContainer = styled.div`
  text-align: left;
`;

const Title = styled.div`
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
  font-family: Poppins;
  color: #f02f23;
  font-weight: 700;
  margin: 15px 0;
`;

const MainHeadline = styled.div`
  font-family: Poppins;
  color: #2a2a2a;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
  line-height: 30px;
`;

const MainDescription = styled.div`
  font-family: Poppins;
  font-size: 15px;
  font-weight: 400;
  color: darkgray;
  margin: 15px 0;
`;

const WhenPublished = styled.div`
  font-family: Poppins;
  font-size: 12px;
  font-weight: 300;
  color: #7c7c7c;
  margin: 15px 0;
`;

const BreakingNewsCard = ({ urlToImage, title, description, publishedAt }) => {
  return (
    <BreakingNewsCardContainer>
      <NewsImage src={urlToImage} />
      <RedDescription>Red Description</RedDescription>
      <MainHeadline>{title}</MainHeadline>
      <MainDescription>{description}</MainDescription>{' '}
      <WhenPublished>{publishedAt}</WhenPublished>
    </BreakingNewsCardContainer>
  );
};

export default BreakingNewsCard;
