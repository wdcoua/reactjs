import React, {useState,useEffect} from "react"
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import style from "../Login/Login.module.css";
import {FileUpload, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validate/validator";


const PhotoUpload = (props) => {
    const onSubmit = (formData) => {
        //
        /*if(props.auth.isAuth === false){
            props.login(formData.email,formData.pass,formData.rememberMe,formData.captcha)
        }else{
            return <Redirect to={'/index'}/>
        }*/
        console.log(formData)
    }
    return <div>
        <PhotoUploadReduxForm onSubmit={onSubmit} {...props} />
    </div>
}

const PhotoUploadForm = (props) => {

    // if(props.auth.isAuth === false){
    //props.auth(formData.email,formData.pass,formData.rememberMe)

    return <form onSubmit={props.handleSubmit}>

        <div className={( !props.error ? style.noError : '') + ' ' + style.error}>
            { props.error}
        </div>

        <div>
            <Field placeholder="photo" component={FileUpload} name='photo' validate={[required]}/>
        </div>

        <div>
            <button>Аплоад</button>
        </div>
    </form>
    /*
}else{
    return <Redirect to={'/index'}/>
}*/


}

const PhotoUploadReduxForm = reduxForm({
    form: 'photoUpload'
})(PhotoUploadForm)




let ProfilePhoto = (props) => {

    return <div>
        <img src={props.photo} alt=""/>
        {/*<PhotoUpload />*/}
    </div>
}

export default connect()(ProfilePhoto)