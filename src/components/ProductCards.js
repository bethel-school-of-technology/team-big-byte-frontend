import React, { useEffect, useState } from 'react';
import data from './ProductCardsData';
import './ProductCards.css';
import {
  ProductsContainer,
  ProductWrapper,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton
} from './ProductCardsElements';

const Products = ({ }) => {

  const [myData, setData] = useState([])

  useEffect(() => {
    setData(data);
  }, [])

  function addToCart(selectedProduct) {
    // console.log(selectedProduct);
    let currentCart = localStorage.getItem('cart');
    if (currentCart == null) {
      let cart = [selectedProduct];
      localStorage.setItem('cart', JSON.stringify(cart))

    }
    else {
      console.log(currentCart);
      let cart = JSON.parse(currentCart);
      cart.push(selectedProduct);
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }

  return (
    <ProductsContainer>
      <ProductWrapper>
        {myData.map((product) => {
          return (
            <ProductCard>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductButton onClick={e => addToCart(product)}>{product.button}</ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>



  );

};

export default Products;