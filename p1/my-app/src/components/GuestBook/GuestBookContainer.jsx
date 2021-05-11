import {
    addGBPost,
    getGbPosts, newGBpostChange,
} from "../../redux/gb_reducer";
import {connect} from "react-redux";
import React, {useEffect} from "react";
import c from "./GuestBook.module.css";
import GuestBookSendForm from "./GuestBookSendForm/GuestBookSendForm";
import GuestBookPosts from "./GuestBookPosts/GuestBookPosts";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

const GuestBookContainer = ({getGbPosts,newGBpostChange,addGBPost,newPostText,gbPosts}) => {
    useEffect(() => {
        getGbPosts();
    });

    // let {newGBpostChange,addGBPost,newPostText,gbPosts} = this.props;
    return (
        <div className={c.gb}>
            <GuestBookSendForm
                onGBNewPostChange={newGBpostChange}
                onGBAddPost={addGBPost}
                newPostText={newPostText}
            />

            <GuestBookPosts gbPosts={gbPosts}/>
        </div>
    );
}
/*
class GuestBookContainer2 extends React.Component{

    // let {getGbPosts,newGBpostChange,addGBPost,newPostText,gbPosts} => this.props;

    componentDidMount = () => {
        getGbPosts();
    }

    render = () => {
        //if(this.props.isAuth === false) return <Redirect to={'/login'}/>;
        let {newGBpostChange,addGBPost,newPostText,gbPosts} = this.props;
        return (
            <div className={c.gb}>
                <GuestBookSendForm
                    onGBNewPostChange={newGBpostChange}
                    onGBAddPost={addGBPost}
                    newPostText={newPostText}
                />

                <GuestBookPosts gbPosts={gbPosts}/>
            </div>
        );
    }
}*/



function mapStateToProps({gb}) {
    return {
        newPostText: gb.newPostText,
        gbPosts: gb.gbPosts,
        //isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {
        getGbPosts,
        newGBpostChange,
        addGBPost,
    }),
    withAuthRedirect
)(GuestBookContainer);


