import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className='fixed top-0 bg-white z-10 w-full shadow-md px-6 py-4 md:p-4'>
      <button className='flex w-[260px] justify-center md:mx-0 mx-auto' onClick={() => navigate('/')}>
        <img src={require('assets/img/cars-logo.png')} alt="logo" className='w-24 h-9' />
        <span className='font-[cursive] font-bold self-center'>
          Cars Management
        </span>
      </button>
    </div>
  )
}
export default Header;