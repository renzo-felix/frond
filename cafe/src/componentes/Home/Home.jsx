import React from 'react'
import { Link } from 'react-router-dom';
import './home.css';
import { useParams } from 'react-router-dom';
import Header from '../header/Header';

const Home = (token) => {
  const Params = useParams();
  if (token == undefined)
    token = Params.token;

  console.log(token)
  return (
    <>
    <Header token={Params.token}/>
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
            {token && <a className='btn'>
               <Link to={`https://tablas.vercel.app/#/Productos?token=${token}`}>
                Check Menu
               </Link> 
            </a>}

            {token && <a  className='btn home__btn'>
                <Link to={`https://tablas.vercel.app/#/reservas?token=${token}`}>
                  Book reservations
                </Link>
            </a>}
          </div>
        </div>
      </div>
    </section>
       </>
  );
};

export default Home;