import React from 'react';
import {Link} from 'react-router-dom';
import './App.css'
import './Textstyles.css'
import LogoIcon from './D6Icon.png';

const Nav = () => {
  return (
    <>
      <nav>
          <ul className="navigation-list">
            <li>
              <Link to='/' className="text-style--headings">О системе</Link>
              <ul className="dropdown">
                <li><Link to='/Gameplay' className="text-style--dropdownheadings bordered">Игровой процесс</Link></li>
                <li><Link to='/Mechanics' className="text-style--dropdownheadings last-dropdownheadings" >Механики игры</Link></li>
              </ul>
            </li>
            <li>
              <Link to='/FirstSteps' className="text-style--headings">С чего начать?</Link>
            </li>
            <li>
              <Link to='/ForMasterAndPlayer' className="text-style--headings">Мастеру/Игроку</Link>
            </li>
            <li>
              <Link to='/Calculator' className="text-style--headings">Калькулятор</Link>
            </li>
          </ul>
          <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" htmlFor="menu__toggle">
              <span></span>
            </label>
            <ul className="menu__box">
              <li><Link to='/' className="menu__item">О системе</Link></li>
              <li><Link to='/FirstSteps' className="menu__item">С чего начать?</Link></li>
              <li><Link to='/ForMasterAndPlayer' className="menu__item">Мастеру/Игроку</Link></li>
              <li><Link to='/Calculator' className="menu__item">Калькулятор</Link></li>
            </ul>
          </div>
      </nav>
    </>
  )
}

const Header = () => {
  return (
  <header className='page-header'>
    <div className='header-content--box'>
      <section className="sytename--box">
          <img className="logo" alt='логотип' src={LogoIcon}></img>
          <a className="sytename--link" href="/">What`s GURPS</a>
      </section>
      
      <Nav />
    </div>
  </header>
  )
}



export default Header