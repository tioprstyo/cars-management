import React from 'react';
import { ArticleCardProps } from '../../type';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const ArticleCard = ({
  article
}: ArticleCardProps) => {
  const navigate = useNavigate();
  const defaultLogo = 'https://e7.pngegg.com/pngimages/474/475/png-clipart-new-york-city-the-new-york-times-company-journalist-new-york-times-text-logo-thumbnail.png';
  return (
    <div className='md:basis-1/3 rounded-xl md:px-3 cursor-pointer mt-5 md:mt-0' onClick={() => navigate('/detail/', { state: { id: article._id } })}>
      <img src={article.multimedia[0]?.url || defaultLogo} alt="article-img" className='w-full h-40 object-cover justify-self-center' />
      <div className='p-5 w-full shadow-lg'>
        <p className='text-xl line-clamp-1 text elipsis font-bold mt-5'>{article.headline.main}</p>
        <p className='text-sm line-clamp-1 text elipsis'>{article.byline.original || 'By -'}</p>
        <p className='text-xs font-thin'>{moment(article.pub_date).format('DD MMM yyyy')}</p>
        <p className='text-sm text-ellipsis line-clamp-3 mt-2'>{article.snippet}</p>
      </div>
    </div>
  )
}

export default ArticleCard;