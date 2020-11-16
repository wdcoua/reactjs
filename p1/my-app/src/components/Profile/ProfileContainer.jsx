import React from "react";
import {connect} from "react-redux";
import {getProfile, getStatus} from "../../redux/profile_reducer";
import Preloader from "../Preloader/Preloader";
import {withRouter} from "react-router-dom";
import Profile from "./Profile";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";




class ProfileContainer extends React.Component{

    componentDidMount() {


         //this.props.setFetchingStatus(true);
       let userID = this.props.match.params.userID;
        if(!userID && this.props.userID) userID = this.props.userID
        if(userID){
            this.props.getStatus(userID);
            this.props.getProfile(userID);
        }else{
            this.props.history.push('/login')
        }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let p = this.props.match.url;
        let pp = prevProps.match.url;
        let s = this.state;

        if(p !== pp){
            let userID = this.props.match.params.userID;
            if(!userID && this.props.userID) userID = this.props.userID
            if(userID){
                this.props.getStatus(userID);
                this.props.getProfile(userID);
            }else{
                this.props.history.push('/login')
            }

        }

    }

    render(){
        // debugger
        if(!this.props.profile )
            return <Preloader />

        return <Profile {...this.props}/>;
    }
}

let mapStateToProps = (state) => { // бере увесь глобальний STATE і повертає тільки те, що нам потрібно для цієї компоненти
    return {
        userID: state.auth.userID,
         profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

//let ProfileContainerWithUrlData = (ProfileContainer);

export default compose(
    withRouter,
    connect(mapStateToProps, {
        getProfile,
        getStatus
    }),
    withAuthRedirect
)(ProfileContainer)

