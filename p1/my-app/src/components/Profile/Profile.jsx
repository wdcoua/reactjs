import React from "react";
import ProfileStatus from "../Profile/ProfileStatus.jsx"



const Profile = (props) => {
    return <div>
        <img src={props.profile.photos.large} alt=""/>
        <ProfileStatus status={props.profile.aboutMe} />
        <div><b>{props.profile.fullName}</b></div>
        <div>"{props.profile.aboutMe}"</div><br/>
        Мои контакты: <br/>
        <div>{props.profile.contacts.facebook}</div>
        <div>{props.profile.contacts.github}</div>
        <div>{props.profile.contacts.instagram}</div>
        <div>{props.profile.contacts.vk}</div>

    </div>;
}


export default Profile
