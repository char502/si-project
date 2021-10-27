import FrontPage from './FrontPage';

const IndexPage = ({ breakingNewsResult }) => {
  return (
    <div>
      <FrontPage breakingNewsResult={breakingNewsResult} />
    </div>
  );
};

export const getServerSideProps = async ({ params, res }) => {
  try {
    const breakingNewsResult = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEXT_PUBLIC_REACT_APP_API_KEY_FOR_PROJ}`
    ).then(response => response.json());

    return {
      props: {
        breakingNewsResult,
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
