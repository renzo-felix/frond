import React from 'react';
import logo from '../../assets/logo.png';
import { links } from '../../Data';
import { FaStream }  from 'react-icons/fa';
import { fetchProducto } from '../Menu/Menu';
import './header.css';
import { Navigate} from 'react-router-dom';



const Header = (token) => {
  console.log("head", token)
  return (
    <>
      
    <header className='header'>
      <nav className='nav container'>
        <a href='/' className='nav__logo'>
          <img src={logo} alt='' className='nav__logo-img' />
        </a>

        <div className="nav__menu">
            <ul className="nav__list">
                
                <li className="nav__item">
                    <a href={token == undefined ? `/home/${token}`: "/home"} className="nav__link">
                        Home
                    </a>
                </li>
                <li className="nav__item">
                    <a href={token == undefined ? `/about/${token}`: "/about"} className="nav__link">
                        About
                    </a>
                </li>
                <li className="nav__item">
                    <a href={token == undefined ? `/features/${token}`: "/features"} className="nav__link">
                        Features
                    </a>
                </li>

                {token != undefined && <li className="nav__item">
                    <a href={`https://tablas.vercel.app/#/Productos?token=${token}`} className="nav__link">
                        Menu
                    </a>
                </li>}
                {token != undefined && <li className="nav__item">
                    <a href={`https://tablas.vercel.app/#/reservas?token=${token}`} className="nav__link">
                        Reservas
                    </a>
                </li>}
                <li className="nav__item">
                  { token != undefined && <a href="/login" className="nav__link">Login</a> }
                   {  token == undefined && <a onClick={Navigate("/home")} className="nav__link">Logout</a>}
                  </li>
            </ul>
        </div>
        <div className='nave__toggle'>
          <FaStream />   
        </div>
     </nav>
   </header> 
   </>
  );
};

export default Header