import React from "react"
import {connect} from "react-redux";
// import {Redirect} from "react-router-dom";
// import {Field, reduxForm} from "redux-form";
// import style from "../Login/Login.module.css";
// import {FileUpload, Input} from "../common/FormsControls/FormsControls";
// import {required} from "../../utils/validate/validator";
// import {compose} from "redux";
// import {checkAuthorization, login} from "../../redux/auth_reducer";
import {updateProfilePhoto} from "../../redux/profile_reducer";

/*
const PhotoUpload = (props) => {
    const onSubmit = (formData) => {
        //
        /!*if(props.auth.isAuth === false){
            props.login(formData.email,formData.pass,formData.rememberMe,formData.captcha)
        }else{
            return <Redirect to={'/index'}/>
        }*!/
        console.log(formData)
    }
    return <div>
        <PhotoUploadReduxForm onSubmit={onSubmit} {...props} />
    </div>
}*/

const PhotoUpload = (props) => {

    // if(props.auth.isAuth === false){
    //props.auth(formData.email,formData.pass,formData.rememberMe)

    const onPhotoSelected = (e) =>{
        console.log(e.target.files[0])
        if(e.target.files.length)
            props.updateProfilePhoto(e.target.files[0])
    }

    return <input onChange={onPhotoSelected}
                   type={'file'} />;

    /*
}else{
    return <Redirect to={'/index'}/>
}*/


}
//
// const PhotoUploadReduxForm = reduxForm({
//     form: 'photoUpload'
// })(PhotoUploadForm)




let ProfilePhoto = (props) => {

    return <div>
        <img src={props.photo} alt=""/>
        <PhotoUpload updateProfilePhoto={props.updateProfilePhoto}/>
    </div>
}



export default connect(null,{updateProfilePhoto})(ProfilePhoto)

// export default connect()(ProfilePhoto)