import React from 'react';
import styled from 'styled-components';
import { DateTime } from 'luxon';
import fromNow from 'from-now';
import Layout from '../src/components/Layout';
import BreakingNewsCard from '../src/components/BreakingNewsCard';
import NewsCard from '../src/components/NewsCard';

const Container = styled.div`
  max-width: 560px;
  margin: 0 auto;
  padding: 0 15px;
`;

const FrontPageTitle = styled.h3`
  font-family: Poppins;
  font-weight: 700;
`;

const StyledHr = styled.hr`
  border-top: 1px solid #e7e7e7;
`;

const FrontPage = ({ breakingNewsResult }) => {
  if (breakingNewsResult.articles.length === 0) {
    return {
      notFound: true,
    };
  }

  const firstBreakingNewsItem = breakingNewsResult.articles[0];

  return (
    <Layout>
      <Container>
        <div>
          <FrontPageTitle>Breaking News</FrontPageTitle>

          <BreakingNewsCard
            urlToImage={firstBreakingNewsItem.urlToImage}
            title={firstBreakingNewsItem.title}
            description={firstBreakingNewsItem.description}
            publishedAt={`${fromNow(firstBreakingNewsItem.publishedAt)} ago`}
          />
        </div>
        <StyledHr />
        <div>
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
