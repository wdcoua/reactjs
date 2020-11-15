import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login, checkAuthorization} from "../../redux/auth_reducer";
import {Redirect} from "react-router-dom";
import {compose} from "redux";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLenCreator, minLenCreator, required} from "../../utils/validate/validator";

class LoginContainer extends React.Component { // зробив для тесту, можна і без цього класу

    componentDidUpdate(prevProps, prevState, snapshot) {
        //let p = this.props;
        //let s = this.state;
        // todo не працює при лог-ауті на сайті
    }

    render() {
        return <Login {...this.props}/>
    }
}

const Login = (props) => {
    const onSubmit = (formData) => {
        //
        if(props.auth.isAuth === false){
            props.login(formData.email,formData.pass,formData.rememberMe)
        }else{
            return <Redirect to={'/index'}/>
        }
        console.log(formData)
    }
    return <div>
        <h1>Авторизація</h1>
        <LoginReduxForm onSubmit={onSubmit} {...props} />
    </div>
}
const maxLen50 = maxLenCreator(50);
const minLen2 = minLenCreator(2);


const LoginForm = (props) => {

    if(props.auth.isAuth === false){
        //props.auth(formData.email,formData.pass,formData.rememberMe)

        return <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"email"} component={Input} name={'email'} validate={[required,maxLen50,minLen2]}/>
            </div>
            <div>
                <Field placeholder={"pass"} component={Input} name={'pass'} validate={[required,maxLen50,minLen2]} />
            </div>
            <div>
                <Field name={'rememberMe'} type={'checkbox'} component={Input}  /> Запам'ятай мене
            </div>
            <div>
                <button>Увійти</button>
            </div>
        </form>
    }else{
        return <Redirect to={'/index'}/>
    }


}

const LoginReduxForm = reduxForm({
    form: 'auth'
})(LoginForm)


const mapStateToProps = (props) => {
    // debugger
    return {
        auth: props.auth
    }
};

export default compose(
    connect(mapStateToProps,{login,checkAuthorization}),
    )(LoginContainer)

//
// export default () => {
//     return <>
//         <a href={`https://social-network.samuraijs.com/login`} target={`_blank`}>Потрібна авторизація</a>
//     </>
// }