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

// const NavHeader = styled.div`
//   background-color: lightcyan;
// `;

// const TopNavMain = styled.div`
//   display: flex;
//   /* justify-content: cen; */
//   align-items: center;
// `;

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

  // console.log(breakingNewsResult);

  return (
    <Layout>
      {/* <NavBar /> */}
      <Container>
        {/* <hr /> */}
        <div>
          {/* <h1>Breaking News</h1> */}

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
