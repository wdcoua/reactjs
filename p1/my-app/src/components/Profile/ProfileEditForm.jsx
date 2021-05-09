import React, {useState} from "react";
import {Field, reduxForm} from "redux-form";
import {createMyField, Hidden, Input, Radio, Textarea} from "../common/FormsControls/FormsControls";
import {compose} from "redux";
import {connect} from "react-redux";
import c from './Profile.module.css';
import {updateProfile} from "../../redux/profile_reducer";


const ProfileEditForm = ({profile, handleSubmit, error}) => {

    // let errrs = (error ? error.split('|||') : []);

    return <form onSubmit={handleSubmit}>
        {/*{error ? <div className={c.error}>
            {errrs.map((er) => {return <div>{er}</div>})}
        </div> : ''}*/}

        <button>Save</button>
        <div className={c.form_name}>fullName:</div>{createMyField(null, Input, 'fullName', [])}
        <div className={c.form_name}>aboutMe:</div>{createMyField(null, Input, 'aboutMe', [], )}
        <div className={c.form_name}>facebook:</div>{createMyField(null, Input, 'facebook', [], )}
        <div className={c.form_name}>github:</div>{createMyField(null, Input, 'github', [], )}
        <div className={c.form_name}>instagram:</div>{createMyField(null, Input, 'instagram', [], )}
        <div className={c.form_name}>mainLink:</div>{createMyField(null, Input, 'mainLink', [], )}
        <div className={c.form_name}>twitter:</div>{createMyField(null, Input, 'twitter', [], )}
        <div className={c.form_name}>vk:</div>{createMyField(null, Input, 'vk', [], )}
        <div className={c.form_name}>website:</div>{createMyField(null, Input, 'website', [], )}
        <div className={c.form_name}>youtube:</div>{createMyField(null, Input, 'youtube', [], )}
        <div className={c.form_name}>Я ищу работу:</div>
        {/*{createMyField(null, Radio, 'lookingForAJob', [], {label: 'Yes', },'Да')}*/}
        {/*{createMyField(null, Radio, 'lookingForAJob', [], {label: 'No', },'Нет')}*/}
        <label><Field name="lookingForAJob" component={Input} type="radio" value="1"/> Yes</label>
        <label><Field name="lookingForAJob" component={Input} type="radio" value="0"/> No</label><br/>
        <div className={c.form_name}>Описание для искомой работы:</div>{createMyField(null, Textarea, 'lookingForAJobDescription', [], )}


        {/*<button>Save</button>*/}
    </form>
}

/*
"aboutMe": formData.aboutMe,
    "contacts": {
    facebook: formData.facebook,
        github: formData.github,
        instagram: formData.instagram,
        mainLink: formData.mainLink,
        twitter: formData.twitter,
        vk: formData.vk,
        website: formData.website,
        youtube: formData.youtube
},
"lookingForAJob": formData.lookingForAJob === '1',
    "lookingForAJobDescription": formData.lookingForAJobDescription,
    "fullName": formData.fullName*/

export default ProfileEditForm
