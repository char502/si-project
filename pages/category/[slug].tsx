
import { useRouter } from 'next/router'
// import React from 'react';

const Category = ({newsItems, category}) => {

  const router = useRouter();

  console.log('router: ', router.query)
  // const { slug, ...rest } = router.query


  return (
    <div>
      <h2>Category page {category}</h2>
      <ul>
        {newsItems.articles.map(news => {
          return (
            <li key={news.url}>
              {news.title}
              
            </li>
          )
        })}
      </ul>
    </div>
    

  ) 
};


export const getServerSideProps = async ({ params }) => {

  console.log(params.slug)

  const category = params.slug



  const newsItems = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=e536074ef7c645008d563c828c8d4354`).then(r => r.json())


  console.log(newsItems)

  // const category = categories.find(x => x.slug === slug);

  return {
    props: {
      newsItems,
      category
    },
  };
};


// export const getStaticPaths = async () => {
//   const categories = (await import('../../src/newsSources')).default;

//   // console.log(categories)

//   const slugs = categories.map(cats => cats.slug);

//   // console.log(slugs)

//   const paths = slugs.map(slug => ({ params: { slug } }));

//   // console.log(paths)

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async ({ params }) => {

//   console.log(params.slug)

//   const category = params.slug



//   const newsItems = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=e536074ef7c645008d563c828c8d4354`).then(r => r.json())


//   console.log(newsItems)

//   // const category = categories.find(x => x.slug === slug);

//   return {
//     props: {
//       newsItems
//     },
//   };
// };



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

export default Category;
