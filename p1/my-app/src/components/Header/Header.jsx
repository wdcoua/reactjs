import React from 'react';
import c from './Header.module.css';
import {NavLink} from "react-router-dom";
import logout from "../../images/logout.png"



const Header = ({logOut,auth}) => {

    return <header>
        <img src="https://wd.co.ua/pic/wd_logo.jpg" className={c.logo} alt='alt'/>

        <div className={c.auth}>

            {auth.isAuth
                ? <div>
                    <NavLink to={'/myprofile'}>
                        {auth.login}
                    </NavLink>
                    <img src={logout} alt='logout' title='вийти' className={c.logout} onClick={logOut}/>
                    {/*<LogOutFormRedux {...props} onSubmit={onSubmit} />*/}
                </div>

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