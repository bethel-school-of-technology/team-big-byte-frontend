import React from 'react'
import ProductCardsItem from './ProductCardsItem';
import './ProductCards.css';


function ProductCards() {
    return (
        <div className='productCards'>
          <h1>Shop the latest products here!</h1>
          <div className='productCards__container'>
            <div className='productcCards__wrapper'>
              <ul className='productCards__items'>
                <ProductCardsItem
                  src='images/img-stand.jpg'
                  label='$45.00'
                  path='/shop'
                />
                <ProductCardsItem
                  src='images/img-watch.jpg'
                  label='$125.00'
                  path='/shop'
                />
                <ProductCardsItem
                  src='images/img-speaker.jpg'
                  label='$80.00'
                  path='/shop'
                />
              </ul>
            </div>
          </div>
        </div>
      );
}

export default ProductCards
