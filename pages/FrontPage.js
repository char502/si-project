import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import ErrorPage from 'next/error';
import { DateTime } from 'luxon';
import fromNow from 'from-now';

import TopMainNav from '../src/components/TopMainNav';
import CategoryLinksNav from '../src/components/CategoryLinkNav';
import BreakingNewsCard from '../src/components/BreakingNewsCard';

const TopNavMain = styled.div`
  display: flex;
  /* justify-content: cen; */
  align-items: center;
`;

const Container = styled.div`
  max-width: 560px;
  margin: 0 auto;
`;

const FrontPage = ({ breakingNewsResult }) => {
  const router = useRouter();

  if (!breakingNewsResult) {
    return <ErrorPage statusCode={404} />;
  }

  // console.log(allNewsSourcesResult);
  // console.log(allSourcesResultData);

  return (
    <div style={{ backgroundColor: 'lightblue' }}>
      <TopNavMain>
        <TopMainNav />
      </TopNavMain>
      <hr />
      <Container>
        <div>
          <CategoryLinksNav />
        </div>
        <hr />
        <div>
          <h1>Breaking News</h1>

          {/* <p>{breakingNewsResult.articles[0].title}</p>
        <p>{breakingNewsResult.articles[0].description}</p>
        <p>{breakingNewsResult.articles[0].urlToImage}</p>
        <p>{`${fromNow(breakingNewsResult.articles[0].publishedAt)} ago`}</p> */}
          <BreakingNewsCard
            urlToImage={breakingNewsResult.articles[0].urlToImage}
            title={breakingNewsResult.articles[0].title}
            description={breakingNewsResult.articles[0].description}
            publishedAt={`${fromNow(
              breakingNewsResult.articles[0].publishedAt
            )} ago`}
          />
        </div>
        {/* <img src="" alt="" /> */}
        <hr />
        <div>
          <h1>Breaking News Articles</h1>
          {breakingNewsResult.articles.map(item => (
            <ul key={item.url}>
              <li>{item.title}</li>
              {/* <li>{item.description}</li> */}
              <li>Author: {item.author}</li>
              <li>
                {DateTime.fromISO(item.publishedAt).toLocaleString({
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </li>
              <li>{item.urlToImage}</li>
            </ul>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FrontPage;
