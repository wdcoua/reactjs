import {
    addGBPost,
    getGbPosts, newGBpostChange,
} from "../../redux/gb_reducer";
import {connect} from "react-redux";
import React from "react";
import c from "./GuestBook.module.css";
import GuestBookSendForm from "./GuestBookSendForm/GuestBookSendForm";
import GuestBookPosts from "./GuestBookPosts/GuestBookPosts";
import {withAuthRedirect} from "../hoc/withAuthRedirect";


class GuestBookContainer extends React.Component{

    componentDidMount = () => {
        this.props.getGbPosts();
    }

    render = () => {
        //if(this.props.isAuth === false) return <Redirect to={'/login'}/>;
        return (
            <div className={c.gb}>
                <GuestBookSendForm
                    onGBNewPostChange={this.props.newGBpostChange}
                    onGBAddPost={this.props.addGBPost}
                    newPostText={this.props.newPostText}
                />

                <GuestBookPosts gbPosts={this.props.gbPosts}/>
            </div>
        );
    }
}



function mapStateToProps(state) {
    return {
        newPostText: state.gb.newPostText,
        gbPosts: state.gb.gbPosts,
        //isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, {
    getGbPosts,
    newGBpostChange,
    addGBPost,
})(withAuthRedirect(GuestBookContainer));

