import React from "react";
import {connect} from "react-redux";
import {getProfile, setUserProfile} from "../../redux/profile_reducer";
import Preloader from "../Preloader/Preloader";
import {withRouter} from "react-router-dom";
import Profile from "./Profile";




class ProfileContainer extends React.Component{

    // apiKey = 'ada3692f-cdc4-4c82-9079-5847319d88fc'
    // // baseURL = 'https://wd.co.ua/api.php'
    // baseURL = 'https://social-network.samuraijs.com/api/1.0/'
    // // currPage = 4
    // instance = axios.create({
    //     withCredentials: true,
    //     baseURL: this.baseURL,
    //     headers: {
    //         'API-KEY': this.apiKey
    //     }
    //
    // });
    //
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
         profile: state.profilePage.profile,
        // usersPerPage:state.users.usersPerPage,
        // totalUsers:state.users.totalUsers,
        // currentPage: state.users.currentPage,
        // isFetching: state.users.isFetching
    }
}

let ProfileContainerWithUrlData = withRouter(ProfileContainer);


export default connect(mapStateToProps, {
    setUserProfile,
    getProfile
    // changeUserFollowStatus,
    // setUsers,
    // setTotalUsers,
    // setCurrentPage,
    // setFetchingStatus
})(ProfileContainerWithUrlData)
