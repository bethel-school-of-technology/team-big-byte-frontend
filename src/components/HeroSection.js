import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1>COME AND EXPLORE</h1>
      <p>Where everyone gets a chance to play!</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          to='/src/components/pages/Products.js'
        >
          Shop Our Products
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('BIGBYTE Final Project 2021')}
        >
          LEARN MORE <i className='fas fa-chevron-up' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;