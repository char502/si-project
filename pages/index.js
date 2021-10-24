// import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { NextPage } from 'next';
import FrontPage from './FrontPage';

const IndexPage = ({ breakingNewsResult, allNewsSourcesResult }) => {
  return (
    <div>
      <FrontPage
        breakingNewsResult={breakingNewsResult}
        allNewsSourcesResult={allNewsSourcesResult}
      />
    </div>
  );
};

export const getServerSideProps = async ({ params, res }) => {
  try {
    const breakingNewsResult = await fetch(
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=e536074ef7c645008d563c828c8d4354'
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
