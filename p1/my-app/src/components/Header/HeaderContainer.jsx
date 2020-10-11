import React from 'react';
import Header from "./Header";
import * as axios from "axios";

class HeaderContainer extends React.Component{

    apiKey = 'ada3692f-cdc4-4c82-9079-5847319d88fc'
    // baseURL = 'https://wd.co.ua/api.php'
    baseURL = 'https://social-network.samuraijs.com/api/1.0/'
    // currPage = 4
    instance = axios.create({
        withCredentials: true,
        baseURL: this.baseURL,
        headers: {
            'API-KEY': this.apiKey
        }

    });

    componentDidMount() {

        this.instance
            .get('auth/me')
            .then(resp => {
                // debugger
                // this.props.setUserProfile(resp.data)
                console.log(resp)
            })

            .catch(error => {
                console.warn(error);
            });
    }

    render(){
        return <Header />
    }
}


export default HeaderContainer;