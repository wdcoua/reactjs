import React, {useEffect} from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login, checkAuthorization} from "../../redux/auth_reducer";
import {Redirect} from "react-router-dom";
import {compose} from "redux";
import {createMyField, Input} from "../common/FormsControls/FormsControls";
import {maxLenCreator, minLenCreator, required} from "../../utils/validate/validator";
import style from "./Login.module.css"

const LoginContainer = (props) => {

    // useEffect(() => {
    //     let p = this.props;
    //     let s = this.state;
    // },[])


    return <Login {...props}/>
}

// class LoginContainer extends React.Component { // зробив для тесту, можна і без цього класу
//
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         let p = this.props;
//         let s = this.state;
//         //debugger
//         // todo не працює при лог-ауті на сайті
//     }
//
//     render() {
//         return <Login {...this.props}/>
//     }
// }

const Login = (props) => {
    const onSubmit = ({email,pass,rememberMe,captcha}) => { //formData
        //
        if (props.auth.isAuth === false) {
            props.login(email, pass, rememberMe, captcha)
        } else {
            return <Redirect to={'/index'}/>
        }
        // console.log(formData)
    }
    return <div>
        <h1>Авторизація</h1>
        <LoginReduxForm onSubmit={onSubmit} {...props} />
    </div>
}
const maxLen50 = maxLenCreator(50);
const minLen2 = minLenCreator(2);


const LoginForm = ({auth, handleSubmit, error}) => {

    if (auth.isAuth === false) {
        //props.auth(formData.email,formData.pass,formData.rememberMe)

        return <form onSubmit={handleSubmit}>

            <div className={(!error ? style.noError : '') + ' ' + style.error}>
                {error}
            </div>
            {createMyField('email', Input, 'email', [required, maxLen50, minLen2])}
            {createMyField('pass', Input, 'pass', [required, maxLen50, minLen2], {type: 'password'})}


            <div className={style.captchaDiv + ' ' + (!auth.capthaImg ? style.noCaptcha : '')}>
                <div>
                    <img alt='captcha' src={auth.capthaImg ? auth.capthaImg : ''}/>
                </div>
                {createMyField('cAp7cH4', Input, 'captcha', (!auth.capthaImg ? [] : [required, maxLen50, minLen2]))}
            </div>

            {createMyField(null, Input, 'rememberMe', [], {type: 'checkbox'}, "Запам'ятай мене")}
            <div>
                <button>Увійти</button>
            </div>
        </form>
    } else {
        return <Redirect to={'/index'}/>
    }


}

const LoginReduxForm = reduxForm({
    form: 'auth'
})(LoginForm)


const mapStateToProps = ({auth}) => {
    //debugger
    return {
        auth: auth,
        //capthaImg: props.capthaImg
    }
};

export default compose(
    connect(mapStateToProps, {login, checkAuthorization}),
)(LoginContainer)

//
// export default () => {
//     return <>
//         <a href={`https://social-network.samuraijs.com/login`} target={`_blank`}>Потрібна авторизація</a>
//     </>
// }