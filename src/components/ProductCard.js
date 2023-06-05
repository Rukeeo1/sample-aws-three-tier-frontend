import React from 'react';
// CiHeart
import { CiHeart } from 'react-icons/ci';
import sneakerOne from '../assets/lacoste-two.avif';
import './ProductCard.scss';

export const ProductCard = ({product}) => {
  return (
    <div className='product'>
      <div className='product__image'>
        <img src={sneakerOne} alt={product.name} />
        <CiHeart className='heart'  size={24}/>
      </div>

      <div className='product__info'>
        <div>
          <div>
            <a href='#'>{product.brand}</a>
            <p>${product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
