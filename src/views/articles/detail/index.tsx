import React, { useEffect, useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArticlesProps } from 'type';
import { getNewsArticleById } from 'api';
import moment from 'moment';

const ProductDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [articleDetail, setArticleDetail] = useState<ArticlesProps>();

  const getArticle = useCallback(async () => {
    if (state && state.id) {
      setArticleDetail(await getNewsArticleById(state?.id));
    } else {
      navigate('/');
    }
  }, [state, navigate]);

  useEffect(() => {
    getArticle();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (articleDetail) {
    return (
      <div className='md:p-8 p-5 text-left'>
        <div className='mb-5 md:w-[50%] w-full'>
          <h1 className='font-bold md:text-3xl text-xl'>{articleDetail?.headline.main}</h1>
          <p className='text-sm mt-2'>{articleDetail?.byline.original}</p>
          <p className='text-sm'>{moment(articleDetail?.pub_date).format('LLLL')}</p>
        </div>
        <div className='md:grid md:grid-cols-2 md:gap-10 '>
          <div className='mb-5'>
            <img src={`https://www.nytimes.com/${articleDetail?.multimedia[0].url}`} alt="product-pict" className='w-full h-96 object-cover' />
          </div>
          <div>
            <div className='mb-5'>
              <p>
                {articleDetail.news_desk && <span className='border border-[#000000] rounded-full px-3 py-1 self-center text-xs mr-2'>{articleDetail.news_desk}</span>}
                {articleDetail.section_name && <span className='border border-[#000000] rounded-full px-3 py-1 self-center text-xs mr-2'>{articleDetail.section_name}</span>}
                {articleDetail.subsection_name && <span className='border border-[#000000] rounded-full px-3 py-1 self-center text-xs mr-2'>{articleDetail.subsection_name}</span>}
              </p>
              <h3 className='font-bold md:text-xl text-base mt-2'>{articleDetail?.abstract}</h3>
              <p className='text-sm'>{articleDetail?.source}</p>
            </div>
            <p>{articleDetail?.lead_paragraph}</p>
            <div className='w-full mt-10 text-center'>
              <a href={articleDetail.web_url} target='_blank' className='py-3 px-8 bg-[#000000] hover:bg-white hover:text-[#000000] border border-[#000000] text-white mx-auto rounded-full md:text-base text-sm' rel="noreferrer">See More Detail</a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* <button className='w-full bg-[#000000] text-white mx-auto rounded-full'>See More Detail</button> */}
    </>
  )
  
};

export default ProductDetail;