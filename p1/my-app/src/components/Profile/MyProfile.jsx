import React from "react";
import ProfileStatus from "../Profile/ProfileStatus.jsx"
import {connect} from "react-redux";
import {compose} from "redux";
import {getProfile, getStatus, setStatus, updateProfile} from "../../redux/profile_reducer";

class MyProfile extends React.Component{

    componentDidMount() {

        this.props.getProfile(11583);
        this.props.getStatus(11583);
        // this.props.setFetchingStatus(true);
        //let userID = this.props.match.params.userID;
        // this.props.getProfile(11583);
        // this.props.getStatus(11583);
    }

    render(){
        //debugger
        if(this.props.profile === null) {
            this.props.getProfile(11583);
            this.props.getStatus(11583);
            //this.props.updateProfile();
            return null;

        }
        return <div>
            <img src={this.props.profile.photos.large} alt=""/>

            <ProfileStatus
                status={this.props.status}
                setStatus={this.props.setStatus}
            />

            <div><b>{this.props.profile.fullName}</b></div>
            <div>"{this.props.profile.aboutMe}"</div><br/>
            Мои контакты: <br/>
            <div>{this.props.profile.contacts.facebook}</div>
            <div>{this.props.profile.contacts.github}</div>
            <div>{this.props.profile.contacts.instagram}</div>
            <div>{this.props.profile.contacts.vk}</div>

        </div>;
    }
}

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

