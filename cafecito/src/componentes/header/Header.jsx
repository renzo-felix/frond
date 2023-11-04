import React from 'react';
import logo from '../../assets/logo.png';
import { links } from '../../Data';
import { FaStream }  from 'react-icons/fa';
import {Link} from 'react-router-dom'
import './header.css';

const Header = () => {
  return (
    <header className='header'>
      <nav className='nav container'>
        <a href='/' className='nav__logo'>
          <img src={logo} alt='' className='nav__logo-img' />
        </a>

        <div className="nav__menu">
            <ul className="nav__list">
                {links.map(({name, path}, index) => {
                    return(
                        <li className="nav__item" key={index}>
                            <Link to={"/"+path} className="nav__link">{name}</Link>
                        </li>
                    )
                })}

            </ul>
        </div>
        <div className='nave__toggle'>
          <FaStream />   
        </div>
     </nav>
   </header> 
  );
};

export default Header