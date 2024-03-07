import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className='flex w-full shadow-md px-6 py-4'>
      <button className='flex' onClick={() => navigate('/')}>
        <img src={require('../../assets/img/praisindo-logo.png')} alt="brand-logo" className='h-14 w-auto' />
        <p className='self-center font-bold text-2xl ml-2'>Articles</p>
      </button>
    </div>
  )
}
export default Header;