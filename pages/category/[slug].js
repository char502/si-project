import { useRouter } from 'next/router';
// import React from 'react';

const Category = ({ newsItems, category }) => {
  const router = useRouter();

  // console.log('router: ', router.query);
  // const { slug, ...rest } = router.query

  return (
    <div>
      <h2>Category page {category}</h2>
      <ul>
        {newsItems.articles.map(news => {
          return <li key={news.url}>{news.title}</li>;
        })}
      </ul>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const category = params.slug;

  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.NEXT_PUBLIC_REACT_APP_API_KEY}`;

  console.log(url);

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
