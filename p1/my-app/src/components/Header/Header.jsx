import React from 'react';
import c from './Header.module.css';


const Header = () => {
    return (<header>
    <img src="https://wd.co.ua/pic/wd_logo.jpg" className={c.logo} alt='alt'/>
    <div className={c.auth}><button id="reg">Реєстрація</button> | <button id="enter">Вхід</button></div>
  </header>);
}

export default Header;