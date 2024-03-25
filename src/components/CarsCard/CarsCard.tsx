import React from 'react';
import { CarsCardProps } from 'type';
import { UpperCaseFirstLetter } from 'utils';

const CarsCard = ({
  car
}: CarsCardProps) => {
  return (
    <div className='md:basis-1/4 w-full rounded-xl md:px-3 cursor-pointer mt-5'>
      <div className='bg-white shadow-lg'>
        <img src={require('assets/img/cars-logo.png')} alt="article-img" className='w-full md:h-22 h-42 object-fit justify-self-center' />
        <div className='p-5 w-full min-h-[130px]'>
          <p className='text-xl line-clamp-1 text elipsis font-bold'>{UpperCaseFirstLetter(car.model)}</p>
          <p className='text-sm line-clamp-1 text elipsis mt-1'>{UpperCaseFirstLetter(car.make)}</p>
          <p className='text-xs font-thin'>Made in {car.year}</p>
          <p className='text-xs font-thin'>{car.cylinders} Cylinder</p>
        </div>
      </div>
    </div>
  )
}

export default CarsCard;