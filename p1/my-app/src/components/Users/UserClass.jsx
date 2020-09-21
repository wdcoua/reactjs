import React from "react";
import * as axios from 'axios';
// import User from "./User/UserView";
import UserView from "./User/UserView";
import styles from "./User/User.module.css"
// import {setCurrentPageAC} from "../../redux/users_reducer";

class UserClass extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

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
            // .get('?action=users&eee')
            .get('users/?count=' + this.props.usersPerPage + '&page=' + this.currentPage)
            .then(resp => {
                // debugger
                this.props.setUsers(resp.data.items)
                this.props.setTotalUsers(resp.data.totalCount)
                // this.props.totalUsers = resp.data.totalCount
                console.log(resp)
            })

            .catch(error => {
                console.warn(error);
            });
    }

    // setUsersHere = () => {
    //     // debugger
    //     if (this.props.users.length === 0) {
    //
    //
    //     }
    // }

    openPageNumber(n){


        this.props.setCurrentPage(n)
        this.instance
            // .get('?action=users&eee')
            .get('users/?count=' + this.props.usersPerPage + '&page=' + n)
            .then(resp => {
                // debugger
                this.props.setUsers(resp.data.items)
                this.props.setTotalUsers(resp.data.totalCount)
                // this.props.totalUsers = resp.data.totalCount
                console.log(resp)
            })

            .catch(error => {
                console.warn(error);
            });

    }

    showPages() {
        let pages = Math.ceil(this.props.totalUsers/this.props.usersPerPage);
        let out = [];
        if(pages > 5){
            for(let i = 1; i <= pages; i++){
                if(this.props.currentPage === i ){
                    out.push( (<span key={i} onClick={ () => {this.openPageNumber(i)} }                                    className={styles.currentPage + ' ' + styles.pages}> {i} </span>))
                }else{
                    out.push( (<span key={i} onClick={ () => {this.openPageNumber(i)} } className={styles.pages}> {i} </span>))
                }
            }
        }else{
        //     console.log(styles.currentPage)
        //     debugger
            for(let i = 1; i <= 5; i++){
                if(this.props.currentPage === i ){
                    out.push( (<span key={i} onClick={ () => {this.openPageNumber(i)} }                                    className={styles.currentPage + ' ' + styles.pages}> {i} </span>))
                }else{
                    out.push( (<span key={i} onClick={ () => {this.openPageNumber(i)} } className={styles.pages}> {i} </span>))
                }
            }
        }

        return (
            <div>Pages:<br/>
                {out}<br/><br/>
            </div>
        )
    }

    render() {
        // this.setUsersHere()
        return (
            <div>

                {this.showPages()}

                {this.props.users.map(u => {
                    // debugger
                    // console.log(u.id)
                    return <UserView key={u.id}
                                     user={u} changeFollowStatus={this.props.changeFollowStatus}
                    />
                })}
            </div>
        );
    }
}

//
// const Users = (props) => {
//      // debugger
// }

export default UserClass;