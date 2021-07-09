import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function ProductCardsItem(props) {
  return (
    <>
      <li className='productCards__item'>
        <Link className='productCards__item__link' to={props.path}>
          <figure className='productCards__item__pic-wrap' data-category={props.label}>
            <img
              className='productCards__item__img'
              alt= 'missing'
              src={props.src}
            />
          </figure>
          <div className='productCards__item__info'>
            <h5 className='productCards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default ProductCardsItem;
