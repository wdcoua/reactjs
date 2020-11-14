import React from 'react';
import c from './GuestBookSendForm.module.css';
import {Field, reduxForm} from "redux-form";

const GbForm = (props) => {

    //let new_gb_post = React.createRef();

/*
    let onPostChange = (props) => {
        debugger
        let text = new_gb_post.current.value;
        props.onGBNewPostChange(text);

    }
*/
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={'textarea'} name={'new_gb_post'} placeholder={'new GB post here'} className={c.gb_form_text} />
        </div>

        <button className={c.gb_form_button} >Send</button>
    </form>
}
/*
let addPost = (props) => {
    props.onGBAddPost();
    props.onGBNewPostChange('');

}*/

const GbReduxForm = reduxForm({
    form: 'gb_add_post'
})(GbForm)




const GuestBookSendForm = (props) => {

    const onSubmit = (formData) => {
        /*
        if(props.auth.isAuth === false){
            props.login(formData.email,formData.pass,formData.rememberMe)
        }else{
            return <Redirect to={'/index'}/>
        }
        */
        props.onGBAddPost(formData.new_gb_post);
        console.log(formData)
        formData.new_gb_post = '';
    }

    return (
        <div className={c.gb_form}>
          <GbReduxForm {...props} onSubmit={onSubmit} />
        </div>
    );
}

export default GuestBookSendForm;