// import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
// import { NextPage } from 'next';
import styled from 'styled-components';
import FrontPage from './FrontPage';

const IndexPage = ({ breakingNewsResult, allNewsSourcesResult }) => {
  return (
    <div>
      <FrontPage breakingNewsResult={breakingNewsResult} />
    </div>
  );
};

export const getServerSideProps = async ({ params, res }) => {
  try {
    const breakingNewsResult = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_REACT_APP_API_KEY}`
    ).then(response => response.json());

    // console.log(breakingNewsResult);

    return {
      props: {
        breakingNewsResult,
        // allNewsSourcesResult,
      },
    };
  } catch {
    res.statusCode = 404;
    return {
      props: {},
    };
  }
};

export default IndexPage;
