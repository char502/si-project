import { useRouter } from 'next/router';
import styled from 'styled-components';
// import React from 'react';
import { DateTime } from 'luxon';
import fromNow from 'from-now';
import Layout from '../../src/components/Layout';
import BreakingNewsCard from '../../src/components/BreakingNewsCard';
import NewsCard from '../../src/components/NewsCard';

const Container = styled.div`
  max-width: 560px;
  margin: 0 auto;
`;

const LatestNewsTitle = styled.h2`
  /* margin: 0; */
`;

const StyledHr = styled.hr`
  color: #e7e7e7;
`;

const Category = ({ newsItems, category }) => {
  const router = useRouter();

  // console.log('router: ', router.query);
  // const { slug, ...rest } = router.query
  // console.log(newsItems);

  return (
    <Layout>
      <Container>
        <LatestNewsTitle>Latest {category} News</LatestNewsTitle>

        <BreakingNewsCard
          urlToImage={newsItems.articles[0].urlToImage}
          title={newsItems.articles[0].title}
          description={newsItems.articles[0].description}
          publishedAt={`${fromNow(newsItems.articles[0].publishedAt)} ago`}
        />

        <StyledHr />

        <h5>Other News - delete when styling finished</h5>
        {newsItems.articles.map((news, i) => {
          {
            /* return <li key={news.url}>{news.title}</li>; */
          }
          if (i !== 0) {
            return (
              <NewsCard
                key={news.url}
                urlToImage={news.urlToImage}
                title={news.title}
                description={news.description}
                publishedAt={DateTime.fromISO(news.publishedAt).toLocaleString({
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              />
            );
          }
        })}
      </Container>
    </Layout>
  );
};

export const getServerSideProps = async ({ params }) => {
  const category = params.slug;

  const newsItems = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.NEXT_PUBLIC_REACT_APP_API_KEY}`
  ).then(response => response.json());

  if (!category) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      newsItems,
      category,
    },
  };
};

export default Category;
