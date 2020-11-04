import React from 'react';
import Header from "./Header";
import {setUserAuthData, setUserAuthImg} from "../../redux/auth_reducer";
import {connect} from "react-redux";
import {API} from "../../api/api";

class HeaderContainer extends React.Component{

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

    componentDidMount() {

        API.authMe()
            .then(data => {
                 // debugger
                if(data.resultCode === 0){
                    let {id, login, email} = data.data;
                    this.props.setUserAuthData(id,email,login);

                    API.getProfile(id)
                        .then(resp => {
                             // debugger
                            if(resp.data.resultCode === 0){
                                // let {id, login, email} = resp.data.data;
                                this.props.setUserAuthImg(resp.data.photos.small)
                            }

                            // console.log(resp)
                        })

                        .catch(error => {
                            console.warn(error);
                        });

                }

                // console.log(resp)
            })

            .catch(error => {
                console.warn(error);
            });
    }

    render(){
        return <Header {...this.props} />
    }
}

const mapStateToProps = (props) => {
    // debugger
    return {
        auth: props.auth
    }
};

export default connect(mapStateToProps,{setUserAuthData,setUserAuthImg})(HeaderContainer);