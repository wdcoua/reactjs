import React from "react";
import { reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login, checkAuthorization, setCaptchaAnswer} from "../../redux/auth_reducer";
import {Redirect} from "react-router-dom";
import {compose} from "redux";
import {createMyField, Hidden, Input} from "../common/FormsControls/FormsControls";
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

    // let {tempCaptcha,setTempCaptcha} = useState('');

    const onSubmit = ({email,pass,rememberMe}) => { //formData
        //
        if (props.auth.isAuth === false) {
            props.login(email, pass, rememberMe)
        } else {
            return <Redirect to={'/index'}/>
        }
        // console.log(formData)
    }
    const onSubmit2 = ({email2,pass2,rememberMe2}) => { //formData
        //
        // console.log('email = ' + email2)
        if (props.auth.isAuth === false) {
            props.login(email2, pass2, rememberMe2)
        } else {
            return <Redirect to={'/index'}/>
        }
        // console.log(formData)
    }
    return <div>
        <h1>Авторизація</h1>
        <LoginReduxForm onSubmit={onSubmit} {...props} /><br/>
        <LoginReduxForm2 onSubmit={onSubmit2} {...props} />
    </div>
}
const maxLen50 = maxLenCreator(50);
const minLen2 = minLenCreator(2);
// const numOnly = onlyNumbers();

// main login_form
const LoginForm = ({auth, handleSubmit, error,setCaptchaAnswer}) => {

    // remember captcha in State for both accounts (to they both could use it while authorizing)
    const formChanged = (e) => {
        if(e.target.name === 'captcha'){
            setCaptchaAnswer(e.target.value)
        }
    }

    if (auth.isAuth === false) {

        return <form onSubmit={handleSubmit} onChange={formChanged} >

            <div className={(!error ? style.noError : '') + ' ' + style.error}>
                {error}
            </div>
            {createMyField('email', Input, 'email', [required, maxLen50, minLen2],{value: 'test'})}
            {createMyField('pass', Input, 'pass', [required, maxLen50, minLen2], {type: 'password'})}


            <div className={style.captchaDiv + ' ' + (!auth.capthaImg ? style.noCaptcha : '')}>
                <div>
                    <img alt='captcha' src={auth.capthaImg ? auth.capthaImg : ''}/>
                </div>
                {createMyField('enter captcha', Input, 'captcha', (!auth.capthaImg ? [] : [required, maxLen50, minLen2]))}
            </div>

            {createMyField(null, Input, 'rememberMe', [], {type: 'checkbox',checked: 'checked'}, "Remember me")}
            <div>
                <button>Log in</button>
            </div>
        </form>
    } else {
        return <Redirect to={'/index'}/>
    }


}

// secondary login form for TESTing
const LoginForm2 = ({auth, handleSubmit, error}) => {

    if (auth.isAuth === false) {

        return <form onSubmit={handleSubmit}>

            <div className={(!error ? style.noError : '') + ' ' + style.error}>
                {error}
            </div>
            {createMyField(null, Hidden, 'email2', [])}
            {createMyField(null, Hidden, 'pass2', [])}

            {/*  NO CAPTCHA NEEDED */}
            {/*<div className={style.captchaDiv + ' ' + (!auth.capthaImg ? style.noCaptcha : '')}>*/}
            {/*    <div>*/}
            {/*        <img alt='captcha' src={auth.capthaImg ? auth.capthaImg : ''}/>*/}
            {/*    </div>*/}
            {/*    {createMyField('enter captcha', Input, 'captcha2', (!auth.capthaImg ? [] : [required, maxLen50, minLen2]))}*/}
            {/*</div>*/}

            {createMyField(null, Hidden, 'rememberMe2', [])}
            <div>
                <button>Log in for test</button>
            </div>
        </form>
    } else {
        return <Redirect to={'/index'}/>
    }


}

const LoginReduxForm = reduxForm({
    form: 'auth'
})(LoginForm)
const LoginReduxForm2 = reduxForm({
    form: 'auth2'
})(LoginForm2)


const mapStateToProps = ({auth}) => {
    //debugger
    return {
        auth: auth,
        initialValues: {
            email2: 'wovo4ka2010@gmail.com',
            pass2: '3AtGqkmDkKfmX6J',
            // email2: 'free@samuraijs.com',
            // pass2: 'free',
            rememberMe2: true,

        },

        //capthaImg: props.capthaImg
    }
};

export default compose(
    connect(mapStateToProps, {login, checkAuthorization,setCaptchaAnswer}),
)(LoginContainer)

//
// export default () => {
//     return <>
//         <a href={`https://social-network.samuraijs.com/login`} target={`_blank`}>Потрібна авторизація</a>
//     </>
// }