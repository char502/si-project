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
  padding: 0 15px;
`;

const LatestNewsTitle = styled.h2`
  font-family: poppins;
  /* margin: 0; */
`;

const StyledHr = styled.hr`
  border-top: 1px solid #e7e7e7;
`;

const Category = ({ newsItems, category }) => {
  const router = useRouter();

  // console.log(router);

  const { slug } = router.query;

  console.log(slug);

  if (!slug) {
    return {
      notFound: true,
    };
  }

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

        {newsItems.articles.map((news, i) => {
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

  console.log(category);

  const newsItems = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.NEXT_PUBLIC_REACT_APP_API_KEY_FOR_PROJ}`
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
