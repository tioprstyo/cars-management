/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from 'react';
import { CarsProps } from 'type';
import { CarsCard, FilterCard } from 'components';
import { IoFilter } from "react-icons/io5";
import { getCars } from 'api';
import { useRecoilValue } from 'recoil';
import { brandSelected, cylinderSelected, fuelTypeSelected, transmissionSelected } from 'store';

const Cars = () => {
  const [keyword, setKeyword] = useState<string>('');
  const [filterMenu, setFilterMenu] = useState(false);
  const [limit, setLimit] = useState<number>(12);
  const [carList, setCarlist] = useState<CarsProps[]>([]);
  const brandIsSelect = useRecoilValue<string>(brandSelected);
  const cylinderIsSelect = useRecoilValue<string>(cylinderSelected);
  const transmissionIsSelect = useRecoilValue<string>(transmissionSelected);
  const fuelTypeIsSelect = useRecoilValue<string>(fuelTypeSelected);
  
  const getCarList = useCallback(async () => {
    setCarlist(await getCars(limit, keyword))
  }, [limit, keyword]);

  useEffect(() => {
    getCarList();
  }, [limit, brandIsSelect, cylinderIsSelect, transmissionIsSelect, fuelTypeIsSelect]);

  useEffect(() => {
    const handleScroll = () => {
      const offsetHeight = document.documentElement.offsetHeight;
      const innerHeight = window.innerHeight;
      const scrollTop = document.documentElement.scrollTop;

      const hasReachedBottom = offsetHeight - (innerHeight + scrollTop) === -88;
      if (hasReachedBottom) {
        setLimit(limit + 12);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  })

  const searchCars = () => {
    getCarList();
  }

  return (
    <div className='md:grid md:grid-cols-5 md:gap-5 md:p-8 p-5 text-left'>
      <div className='md:block hidden relative'>
        <FilterCard />
      </div>
      <div className='md:col-span-4 mt-5 md:mt-0 md:overflow-y-auto'>
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
                placeholder="Search Car By Models" 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setKeyword(e.target.value)} 
                required 
              />
            </div>
          </div>
          <button
            type="button"
            className="text-white bg-[#63B5B0] hover:bg-[#5AC6BD] font-medium rounded-lg text-sm px-6 py-1.5"
            onClick={() => searchCars()}
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
            carList && carList.map((e: CarsProps, index: number) => (
              <CarsCard key={index} car={e} />
            ))
          }
        </div>
      </div>
      </div>
  )
}

export default Cars;