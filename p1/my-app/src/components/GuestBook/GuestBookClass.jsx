import React from 'react';
import c from './GuestBook.module.css';
import GuestBookSendForm from "./GuestBookSendForm/GuestBookSendForm";
import GuestBookPosts from "./GuestBookPosts/GuestBookPosts";
import * as axios from "axios";


class GuestBookClass extends React.Component{

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
                console.log(resp)
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

// const GuestBook1 = (props) => {
//
//
//
//
// }

export default GuestBookClass;