import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getProfile, getStatus} from "../../redux/profile_reducer";
import Preloader from "../Preloader/Preloader";
import {withRouter} from "react-router-dom";
import Profile from "./Profile";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

const ProfileContainer = (props) => {

    useEffect(() => {

        let {getStatus, getProfile, userID, history, match} = props;
        //this.props.setFetchingStatus(true);
        let userID2 = match.params.userID;
        if (!userID2 && userID) userID2 = userID
        if (userID2) {
            getStatus(userID2);
            getProfile(userID2);
        } else {
            history.push('/login')
        }

    },[props.userID]);




    if (!props.profile)
        return <Preloader/>

    return <Profile {...props}/>

}
    /*

    class ProfileContainer2 extends React.Component {

        componentDidMount() {

            let {getStatus, getProfile, userID, history, match} = this.props;
            //this.props.setFetchingStatus(true);
            let userID2 = match.params.userID;
            if (!userID2 && userID) userID2 = userID
            if (userID2) {
                getStatus(userID2);
                getProfile(userID2);
            } else {
                history.push('/login')
            }

        }

        componentDidUpdate(prevProps, prevState, snapshot) {

            let {match, userID1, getStatus, getProfile, history} = this.props;
            let p = match.url;
            let pp = prevProps.match.url;
            let s = this.state;

            if (p !== pp) {
                let userID = match.params.userID;
                if (!userID && userID1) userID = userID1
                if (userID) {
                    getStatus(userID);
                    getProfile(userID);
                } else {
                    history.push('/login')
                }

            }

        }

        render() {
            // debugger
            if (!this.props.profile)
                return <Preloader/>

            return <Profile {...this.props}/>;
        }
    }
    */

let mapStateToProps = ({auth, profilePage}) => { // бере увесь глобальний STATE і повертає тільки те, що нам потрібно для цієї компоненти
    return {
        userID: auth.userID,
        profile: profilePage.profile,
        status: profilePage.status
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

