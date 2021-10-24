import React, { useState, useEffect } from 'react';
import categories from '../src/newsSources';
// import axios from 'axios';
// import fetch from 'node-fetch';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ErrorPage from 'next/error';
import { DateTime } from 'luxon';
import fromNow from 'from-now';

const FrontPage = ({ breakingNewsResult }) => {
  const router = useRouter();

  if (!breakingNewsResult) {
    return <ErrorPage statusCode={404} />;
  }

  // const [BreakingNews, setBreakingNews] = useState([]);
  // const [EnterNewsSources, setAllSourcesNews] = useState([]);

  // console.log(allNewsSourcesResult);
  // console.log(allSourcesResultData);

  // useEffect(() => {});

  return (
    <div style={{ backgroundColor: 'lightblue' }}>
      {/* <TopMainNav> */}
      <div>
        <ul style={{ listStyle: 'none', display: 'flex' }}>
          {['Anderson Post', 'Newsletter', 'Sign In', 'Subscribe'].map(
            (navItem, i) => {
              return (
                <li key={i} style={{ margin: '0 5px' }}>
                  {navItem}
                </li>
              );
            }
          )}
        </ul>
      </div>
      {/* <CategoryLinksNav> */}
      <div>
        <ul style={{ listStyle: 'none', display: 'flex' }}>
          {categories.map(category => {
            // return <li key={category.id} style={{margin: '0 5px' }}>{category.name}</li>;
            return (
              <li key={category.id} style={{ margin: '0 5px' }}>
                <Link href={`/category/${category.slug}`}>
                  <a>{category.name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <h1>Breaking News</h1>

        <p>{breakingNewsResult.articles[0].title}</p>
        <p>{breakingNewsResult.articles[0].description}</p>
        {/* <p>{item.urlToImage}</p> */}
        <p>{`${fromNow(breakingNewsResult.articles[0].publishedAt)} ago`}</p>
      </div>
      {/* <img src="" alt="" /> */}
      <hr />
      <div>
        <h1>Breaking News Articles</h1>
        {breakingNewsResult.articles.map(item => (
          <ul key={item.url}>
            <li>{item.title}</li>
            <li>{item.description}</li>
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
    </div>
  );
};

export default FrontPage;
