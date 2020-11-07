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


class GuestBookContainer extends React.Component{

    componentDidMount = () => {
        this.props.get_gb_posts();
    }

    render = () => {

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
        gbPosts: state.gb.gbPosts
    }
}


export default connect(mapStateToProps, {
    get_gb_posts,
    newGBpostChangeActionCreator,
    addGBPostActionCreator,
})(GuestBookContainer);

