import React from "react";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profile_reducer";
import Preloader from "../Preloader/Preloader";
import {withRouter} from "react-router-dom";
import Profile from "./Profile";
import {withAuthRedirect} from "../hoc/withAuthRedirect";




class ProfileContainer extends React.Component{

    componentDidMount() {


        // this.props.setFetchingStatus(true);
        let userID = this.props.match.params.userID;
        this.props.getProfile(userID);
    }

    render(){
        // debugger
        if(!this.props.profile)
            return <Preloader />

        return <Profile {...this.props}/>;
    }
}

let mapStateToProps = (state) => { // бере увесь глобальний STATE і повертає тільки те, що нам потрібно для цієї компоненти
    return {
         profile: state.profilePage.profile
    }
}

let ProfileContainerWithUrlData = withRouter(ProfileContainer);


export default connect(mapStateToProps, {
    getProfile
})(withAuthRedirect(ProfileContainerWithUrlData))
