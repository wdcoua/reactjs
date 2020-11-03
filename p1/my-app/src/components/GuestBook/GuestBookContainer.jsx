// import React from 'react';
import {addGBPostActionCreator, newGBpostChangeActionCreator, setGBPostsAC} from "../../redux/gb_reducer";
// import GuestBook from "./GuestBook";
import {connect} from "react-redux";
import React from "react";
import * as axios from "axios";
import c from "./GuestBook.module.css";
import GuestBookSendForm from "./GuestBookSendForm/GuestBookSendForm";
import GuestBookPosts from "./GuestBookPosts/GuestBookPosts";
// import GuestBookClass from "./GuestBookClass";


class GuestBookContainer extends React.Component{

    apiKey = 'ada3692f-cdc4-4c82-9079-5847319d88fc'
    baseURL = 'https://wd.co.ua/api.php'


    componentDidMount = () => {

        const instance = axios.create({
            withCredentials: true,
            baseURL: this.baseURL,
            headers: {
                'API-KEY': this.apiKey
            }

        });

        instance
            .get('?action=get_gb_posts')
            // .get('https://social-network.samuraijs.com/api/1.0/users/?count=20&page=250')
            .then(resp => {
                // debugger
                this.props.setGBPosts(resp.data.items)
                // console.log(resp)
            })

            .catch(error => {
                console.warn(error);
            });

    }


    render = () => {

        return (
            <div className={c.gb}>
                <GuestBookSendForm
                    onGBNewPostChange={this.props.onGBNewPostChange}
                    onGBAddPost={this.props.onGBAddPost}
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

function mapDispatchToProps(dispatch) {
    return {
        onGBNewPostChange: (text) => {
            dispatch(newGBpostChangeActionCreator(text));
        },
        onGBAddPost: () => {
            dispatch(addGBPostActionCreator());//
            dispatch(newGBpostChangeActionCreator(''));
        },

        setGBPosts:(posts) => {
            // debugger
            dispatch(setGBPostsAC(posts));
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuestBookContainer);