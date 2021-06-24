import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Join the Tech World with these AMAZING Products</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-gimbal.jpg'
              text='Say goodbye to shakey video and say hello to this all new camera stabelizer! with new gimbal from DJI, you can take profesional grade videos right in your backyard!'
              label='$199.99'
              path='/products'
            />
            <CardItem
              src='images/img-pods.jpg'
              text='With Apples new Air Pods, it has become easier than ever to take your music on the go with you with these portable and small enough to fit in your pocket wireless earbuds!'
              label='$150.00'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-stand.jpg'
              text='With this smart phone stand, you can have your phone where you wont miss a notification and at the same time have your device charging at ultra fast speeds!'
              label='$45.00'
              path='/products'
            />
            <CardItem
              src='images/img-watch.jpg'
              text='Are you active a lot? ever wonder how many steps your take a day or what your resting heart rate is? Check out our new top of the line fitness watch!'
              label='$125.00'
              path='/products'
            />
            <CardItem
              src='images/img-speaker.jpg'
              text='A smart speaker for your home! control your house and entertainment like never before!'
              label='$80.00'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;