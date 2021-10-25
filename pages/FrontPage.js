import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import ErrorPage from 'next/error';
import { DateTime } from 'luxon';
import fromNow from 'from-now';

// import TopMainNav from '../src/components/TopMainNav';
// import CategoryLinksNav from '../src/components/CategoryLinkNav';
// import NavBar from '../src/components/Navbar';
import Layout from '../src/components/Layout';
import BreakingNewsCard from '../src/components/BreakingNewsCard';
import NewsCard from '../src/components/NewsCard';

const Container = styled.div`
  max-width: 560px;
  margin: 0 auto;
`;

const StyledHr = styled.hr`
  color: #e7e7e7;
`;

const FrontPage = ({ breakingNewsResult }) => {
  const router = useRouter();

  if (!breakingNewsResult) {
    return <ErrorPage statusCode={404} />;
  }

  // console.log(allNewsSourcesResult);
  // console.log(allSourcesResultData);

  // console.log(breakingNewsResult);

  return (
    <Layout>
      <Container>
        <div>
          <h3>Breaking News</h3>

          <BreakingNewsCard
            urlToImage={breakingNewsResult.articles[0].urlToImage}
            title={breakingNewsResult.articles[0].title}
            description={breakingNewsResult.articles[0].description}
            publishedAt={`${fromNow(
              breakingNewsResult.articles[0].publishedAt
            )} ago`}
          />
        </div>
        <StyledHr />
        <div style={{ maxWidth: '560px' }}>
          <h5>Other Articles</h5>
          {breakingNewsResult.articles.map((item, i) => {
            if (i !== 0) {
              return (
                <NewsCard
                  key={item.url}
                  urlToImage={item.urlToImage}
                  title={item.title}
                  description={item.description}
                  publishedAt={DateTime.fromISO(
                    item.publishedAt
                  ).toLocaleString({
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                />
              );
            }
          })}
        </div>
      </Container>
    </Layout>
  );
};

export default FrontPage;
