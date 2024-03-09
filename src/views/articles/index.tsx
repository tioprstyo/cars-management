import React, { useState, useEffect, useCallback } from 'react';
import { ArticlesProps } from 'type';
import { ArticleCard, FilterCard } from 'components';
import { IoFilter } from "react-icons/io5";
import { getNewsArticle } from 'api';
import { useRecoilValue } from 'recoil';
import { newDesksSelected, materialSelected } from 'store';

const Articles = () => {
  const [allArticle, setAllArticle] = useState<ArticlesProps[]>([]);
  const [keyword, setKeyword] = useState<string>('');
  const [filterMenu, setFilterMenu] = useState(false);
  const newsDeskSelect = useRecoilValue<string[]>(newDesksSelected);
  const materialSelect = useRecoilValue<string[]>(materialSelected);
  
  const getArticle = useCallback(async (query: string) => {
    setAllArticle(await getNewsArticle(query, newsDeskSelect, materialSelect));
  }, [newsDeskSelect, materialSelect]);

  useEffect(() => {
    getArticle(keyword);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newsDeskSelect, materialSelect]);

  const searchArticle = () => {
    getArticle(keyword)
  }

  return (
    <div className='md:grid md:grid-cols-5 md:gap-5 md:p-8 p-5 text-left'>
      <div className='md:block hidden'>
        <FilterCard />
      </div>
      <div className='md:col-span-4 mt-5 md:mt-0'>
        <div className="mx-auto md:px-3 flex md:gap-5 gap-2">
          <div className='w-full'>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium sr-only">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input 
                type="search" 
                id="default-search" 
                value={keyword} 
                className="outline-none block w-full p-3 ps-10 text-sm border border-[#e5e7eb] rounded-lg focus:none" 
                placeholder="Search Article News" 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setKeyword(e.target.value)} 
                required 
              />
            </div>
          </div>
          <button
            type="button"
            className="text-white bg-[#63B5B0] hover:bg-[#5AC6BD] font-medium rounded-lg text-sm px-6 py-1.5"
            onClick={() => searchArticle()}
          >
            Search
          </button>
          <button
            type="button"
            className={`border border-[#63B5B0] font-medium rounded-lg text-sm px-3 md:hidden block ${filterMenu ? 'bg-[#63B5B0] text-white hover:bg-[#5AC6BD]' : 'bg-white text-[#63B5B0]'}`}
            onClick={() => setFilterMenu(!filterMenu)}
          >
            <IoFilter />
          </button>
        </div>
        <div className={filterMenu ? 'block': 'hidden'}>
          <FilterCard />
        </div>
        <div className='flex flex-wrap mt-5 md:mt-0'>
          {
            allArticle && allArticle.map((e: ArticlesProps, index: number) => (
              <ArticleCard key={index} article={e} />
            ))
          }
        </div>
      </div>
      </div>
  )
}

export default Articles;