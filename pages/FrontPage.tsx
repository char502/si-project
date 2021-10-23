import React, { useState, useEffect } from 'react';
import categories from '../src/newsSources';
// import axios from 'axios';
import fetch from 'node-fetch';
import { useRouter } from "next/router"
import Link from "next/link"

// const baseUrl = 'https://newsapi.org/v2';

// export const getNews = path => {
//   const link = `${baseUrl}?sources=${path}`;
//   return axios.get(link).then(response => response.data);
// };

// GET https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=API_KEY

const FrontPage = () => {

  const router = useRouter();

  // const [newsSources, setNewsSources] = useState([]);

  const [BusNewsSources, setBusNewsSources] = useState([]);
  const [EnterNewsSources, setEnterNewsSources] = useState([]);
  // const [newsSources, setNewsSources] = useState([]);
  // const [newsSources, setNewsSources] = useState([]);
  // const [newsSources, setNewsSources] = useState([]);
  // const [newsSources, setNewsSources] = useState([]);
  // const [newsSources, setNewsSources] = useState([]);

  // const getNews = category => {
  //   const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=e536074ef7c645008d563c828c8d4354`;

  //   console.log(url);

  //   // const url =
  //   //   'https://newsapi.org/v2/top-headlines?country=gb&category=business&apiKey=e536074ef7c645008d563c828c8d4354';

  //   return axios.get(url).then(res => res.data);
  //   // console.log(res.data);
  //   // setNewsSources(result);
  // };

  // useEffect(() => {
  //   const getNewsByCategory = async () => {
  //     const [Bus, Enter] = await Promise.all(
  //       categories.map(({ category }) => getNews(category))
  //     );

  //     setBusNewsSources(Bus);
  //     setEnterNewsSources(Enter);
  //   };

  //   getNewsByCategory();
  // }, []);

  // console.log('Business: ', BusNewsSources.articles);
  // console.log('Entertainment: ', EnterNewsSources.articles);

  // console.log(data.articles);

  // const link = `/category/${category.name}`

  return (
    <div style={{ backgroundColor: 'lightblue' }}>
      {/* <TopMainNav> */}
      <div>
        <ul style={{listStyle: 'none', display: 'flex', }}>
          {['Anderson Post', 'Newsletter', 'Sign In', 'Subscribe'].map((navItem, i) => {
            return <li key={i} style={{margin: '0 5px' }}>{navItem}</li>;
          })}
        </ul>
      </div>
      {/* <CategoryLinksNav> */}
      <div>
        <ul style={{listStyle: 'none', display: 'flex', }}>
          {categories.map(category => {
            // return <li key={category.id} style={{margin: '0 5px' }}>{category.name}</li>;
            return (
              
                <li key={category.id} style={{margin: '0 5px' }}>
                  <Link href={`/category/${category.slug}`}>
                    <a>{category.name}</a>
                   </Link>
                </li>
             
            ) 
          })}
        </ul>
      </div>
      <div>
        <h1>Business Article</h1>

        {/* <p>{data.articles[0].title}</p> */}
        {/* {BusNewsSources.articles.map(item => (
          <ul key={item.title}>
            <li>{item.title}</li>
          </ul>
        ))}
        test123 */}
        {/* Title: {BusNewsSources.articles[0].title}
        Description: {BusNewsSources.articles[0].description}
        Picture: <img src={BusNewsSources.articles[0].urlToImage} alt='test' /> */}
      </div>
      {/* <img src="" alt="" /> */}
      <div>
        <h1>Entertainment Article</h1>
        {/* {EnterNewsSources.articles.map(item => (
          <ul key={item.title}>
            <li>{item.title}</li>
          </ul>
        ))}
        test123 */}
        {/* Title: {EnterNewsSources.articles[0].title}
        Description: {EnterNewsSources.articles[0].description}
        Picture:{' '}
        <img src={EnterNewsSources.articles[0].urlToImage} alt='test' /> */}
      </div>
    </div>
  );
};

// export const getServerSideProps = async ({ params, res }) => {
//   const { category } = params;

//   const result = await fetch(
//     `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=e536074ef7c645008d563c828c8d4354`
//   );

//   const data = await result.json();

//   return {
//     props: { data },
//   };
// };

export default FrontPage;
