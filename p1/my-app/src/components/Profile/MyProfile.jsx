import React, {useEffect} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {getProfile, getStatus, setStatus, updateProfile} from "../../redux/profile_reducer";
import ProfileStatusWithHocs from "./ProfileStatusWithHocs";
import ProfilePhoto from "./ProfilePhoto";
import defaultUserPhoto from "../../images/user.png";
import Preloader from "../Preloader/Preloader";

const MyProfile = ({profile,getProfile,getStatus,status,setStatus}) => {
    // let {profile,getProfile,getStatus,status,setStatus} = props;

    useEffect(() => {

        // let {getProfile,getStatus} = props;
        getProfile(profile.userId);
        getStatus(profile.userId);
    },[status])


/*
    if(profile === null) {
        getProfile(11583);
        getStatus(11583);
        //this.props.updateProfile();
        return null;

    }*/

    if (!profile )
        return <Preloader/>

    return <div>
        <ProfilePhoto
            photo={profile.photos.large ? profile.photos.large : defaultUserPhoto }
        />


        <div><b>{profile.fullName}</b></div>
        <ProfileStatusWithHocs
            status={status}
            setStatus={setStatus}
        />

        <div>"{profile.aboutMe}"</div><br/>
        Мои контакты: <br/>
        <div>{profile.contacts.facebook}</div>
        <div>{profile.contacts.github}</div>
        <div>{profile.contacts.instagram}</div>
        <div>{profile.contacts.vk}</div>

    </div>;
}
/*

class MyProfile2 extends React.Component{

    componentDidMount() {

        let {getProfile,getStatus} = this.props;
        getProfile(11583);
        getStatus(11583);
        // this.props.setFetchingStatus(true);
        //let userID = this.props.match.params.userID;
        // this.props.getProfile(11583);
        // this.props.getStatus(11583);
    }

    render(){
        //debugger

        let {profile,getProfile,getStatus,status,setStatus} = this.props;

        if(profile === null) {
            getProfile(11583);
            getStatus(11583);
            //this.props.updateProfile();
            return null;

        }
        return <div>
            <ProfilePhoto
                 photo={profile.photos.large ? profile.photos.large : defaultUserPhoto }
            />


            <div><b>{profile.fullName}</b></div>
            <ProfileStatusWithHocs
                status={status}
                setStatus={setStatus}
            />

            <div>"{profile.aboutMe}"</div><br/>
            Мои контакты: <br/>
            <div>{profile.contacts.facebook}</div>
            <div>{profile.contacts.github}</div>
            <div>{profile.contacts.instagram}</div>
            <div>{profile.contacts.vk}</div>

        </div>;
    }
}
*/

let mapStateToProps = (state) => { // бере увесь глобальний STATE і повертає тільки те, що нам потрібно для цієї компоненти
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose(
    connect(
        mapStateToProps,{
            getProfile,
            getStatus,
            setStatus,
            updateProfile
        }
    )
)(MyProfile)

