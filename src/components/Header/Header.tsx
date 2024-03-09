import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className='fixed top-0 bg-white z-10 w-full shadow-md px-6 md:py-4 py-3'>
      <button className='flex' onClick={() => navigate('/')}>
        <img src={require('assets/img/nyt-logo.png')} alt="brand-logo" className='md:h-14 h-8 w-auto' />
      </button>
    </div>
  )
}
export default Header;