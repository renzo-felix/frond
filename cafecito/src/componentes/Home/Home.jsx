import React from 'react'
import './home.css';

const Home = () => {
  return (
    <section className='home' id='home'>
      <div className='home__container container'>
        <div className='home__content'>
          <span className='home__subtitle'>
          ¡Welcome to Coffee Cat!</span>
          <h1 className='home__title'>
           We make the best coffee
          </h1>
          <p className='home__description'>
          In our cat corner, enjoy coffee and 
          feline cuddles. The perfect company for cat and 
          coffee lovers. We hope you enjoy your visit! 🐾☕😺
          </p>

          <div className='home__btns'>
            <a href='#menu' className='btn'>
               Check Menu
            </a>

            <a href='#reservation' className='btn home__btn'>
               Book reservations
            </a>
          </div>
        </div>
      </div>
    </section>
       
  );
};

export default Home;