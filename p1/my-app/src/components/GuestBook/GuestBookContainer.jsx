import {
    addGBPostActionCreator,
    get_gb_posts,
    newGBpostChangeActionCreator,

} from "../../redux/gb_reducer";
import {connect} from "react-redux";
import React from "react";
import c from "./GuestBook.module.css";
import GuestBookSendForm from "./GuestBookSendForm/GuestBookSendForm";
import GuestBookPosts from "./GuestBookPosts/GuestBookPosts";
import {Redirect} from "react-router-dom";


class GuestBookContainer extends React.Component{

    componentDidMount = () => {
        this.props.get_gb_posts();
    }

    render = () => {
        if(this.props.isAuth === false) return <Redirect to={'/login'}/>;
        return (
            <div className={c.gb}>
                <GuestBookSendForm
                    onGBNewPostChange={this.props.newGBpostChangeActionCreator}
                    onGBAddPost={this.props.addGBPostActionCreator}
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
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, {
    get_gb_posts,
    newGBpostChangeActionCreator,
    addGBPostActionCreator,
})(GuestBookContainer);

