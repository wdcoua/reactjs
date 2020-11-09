import React from "react";



const Profile = (props) => {
    return <div>
        <img src={props.profile.photos.large} alt=""/>
        <div><b>{props.profile.fullName}</b></div>
        <div>Статус: {props.status}</div>
        <div>Обо мне: "{props.profile.aboutMe}"</div><br/>
        Мои контакты: <br/>
        <div>{props.profile.contacts.facebook}</div>
        <div>{props.profile.contacts.github}</div>
        <div>{props.profile.contacts.instagram}</div>
        <div>{props.profile.contacts.vk}</div>

    </div>;
}


export default Profile
