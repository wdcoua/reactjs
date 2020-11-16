import React from 'react';
import c from './Header.module.css';
import {NavLink} from "react-router-dom";
import logout from "../../images/logout.png"


/*const LogOutForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={Hidden} name='logout' type='hidden' value='1'/>
        <button>Log Out</button>
    </form>
}

const LogOutFormRedux = reduxForm({
    form: 'logOut'
})(LogOutForm);*/

const Header = (props) => {
    // console.log(props.auth.isAuth)

/*
    const onSubmit = (formData) => {
        props.logOut();
        console.log(formData)
        //formData.new_chat_post = '';
    }*/

    return <header>
        <img src="https://wd.co.ua/pic/wd_logo.jpg" className={c.logo} alt='alt'/>

        <div className={c.auth}>

            {props.auth.isAuth
                ? <div>
                    <NavLink to={'/myprofile'}>
                        {props.auth.login}
                    </NavLink>
                    <img src={logout} alt='logout' title='вийти' className={c.logout} onClick={props.logOut}/>
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