import React from 'react';
import c from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    // console.log(props.auth.isAuth)
    return <header>
        <img src="https://wd.co.ua/pic/wd_logo.jpg" className={c.logo} alt='alt'/>

        <div className={c.auth}>

            {props.auth.isAuth
                ? <NavLink to={'/myprofile'}>
                    {props.auth.login}
                </NavLink>
                : <div>
                <NavLink to={'/reg'}>
                    <button id="reg">Реєстрація</button>
                </NavLink> <NavLink to={'/login'}>
                <button id="enter">Вхід</button>
            </NavLink>
            </div>}

        </div>
    </header>
}

export default Header;