import React, { useState, useEffect } from 'react';
import { ArticlesProps } from '../../type';
import { ArticleCard } from '../../components'

const Product = () => {
  const [allArticle, setAllArticle] = useState<ArticlesProps[]>([]);
  const [filterList, setFilterList] = useState<ArticlesProps[]>([]);
  const [categories, setCategories] = useState<string[]>(
    [
      'politics', 'national', 'business', 'culture', 'washington', 'weekend'
    ]
  );
  const [category, setCategory] = useState<string[]>([]);

  // news_desk: (${ JSON.stringify(category).slice(1, -1) })

  const getProducts = () => {
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=vQgolXCsjyloRSXyTvSwwRzVyyD9Tfo4&fq=`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAllArticle(data.response?.docs);
        setFilterList(data.response?.docs);
        let newsDesk: string[] = [];
        data.response?.docs.forEach((e: ArticlesProps) => {
          if (!newsDesk.find(article => article === e.news_desk) && e.news_desk) {
            newsDesk.push(e.news_desk);
          }

          if (e.multimedia.length > 0) {
            e.multimedia[0].url = `https://www.nytimes.com/${e.multimedia[0].url}`
          }
        });
      });
  }

  useEffect(() => {
    getProducts();
  });

  const onChangeCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    if (e.target.checked) {
      let filterCategory = [...allArticle];
      setFilterList(filterCategory.filter((articles: ArticlesProps) => articles.news_desk === e.target.value));
    } else {
      setFilterList(allArticle);
    }
  }
  return (
    <div className='md:grid md:grid-cols-5 md:gap-5 md:p-8 p-5 text-left'>
      <div className='md:col-span-1 shadow-lg p-4 md:min-h-screen md:min-w-[200px]'>
        <h2 className='text-lg font-bold mb-3 text-left'>Filter</h2>
        <p className='mb-2 text-left'>Category</p>
        {
          categories.map((e: string, index: number) => (
            <div className='mb-1 flex' key={index + 2}>
              <input type="checkbox" id={`category-${index + 2}`} name={`category-${index + 2}`} className='self-center mr-2' value={e} onChange={onChangeCategory}></input>
              <p>{e.charAt(0).toUpperCase() + e.slice(1)}</p>
            </div>
          ))
        }
      </div>
      <div className='md:col-span-4 flex flex-wrap mt-5 md:mt-0'>
        {
          filterList && filterList.map((e: ArticlesProps, index: number) => (
            <ArticleCard key={index} article={e} />
          ))
        }
        
      </div>
      </div>
  )
}

export default Product;