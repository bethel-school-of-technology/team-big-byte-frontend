import React from 'react';
import Footer from '../Footer';
import ProductCards from '../ProductCards';
import ActiveCart from '../ActiveCart';


const Shop = () => {
  return (
    <div>
      <ProductCards />
      <ActiveCart />
      <Footer />
    </div>
  )
}

export default Shop
