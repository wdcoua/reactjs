import * as axios from "axios";
import {setCurrentPage} from "../redux/users_reducer";

let apiKey = 'ada3692f-cdc4-4c82-9079-5847319d88fc'
// baseURL = 'https://wd.co.ua/api.php'
let baseURL = 'https://social-network.samuraijs.com/api/1.0/'
// currPage = 4
export let instance = axios.create({
    withCredentials: true,
    baseURL: baseURL,
    headers: {
        'API-KEY': apiKey
    }

});


/*********************************************************/


let apiKey2 = 'ada3692f-cdc4-4c82-9079-5847319d88fc';
let baseURL2 = 'https://wd.co.ua/api.php';

export const instance2 = axios.create({
    withCredentials: true,
    baseURL: baseURL2,
    headers: {
        'API-KEY': apiKey2
    }

});

export const API = {


    getUsers(usersPerPage = 10, currentPage = 5) {
/*
        if((currentPage === -1 || currentPage === 255) && total !== -1){
            currentPage = Math.ceil((total - 6590) / usersPerPage);

            //setCurrentPage(currentPage);
        }
        if(currentPage === -1){
            currentPage = 229;

            //setCurrentPage(currentPage);
        }*/
        return instance
            .get('users/?count=' + usersPerPage + '&page=' + currentPage)
            .then(resp => {
                    //console.log(resp);
                    //resp.data.cp = currentPage;
                    return resp.data
                }
            );
    },

    follow(id) {
        return instance
            .post('follow/' + id)
            .then(resp => {
                    return resp.data
                }
            );
    },

    unfollow(id) {
        return instance
            .delete('follow/' + id)
            .then(resp => {
                    return resp.data
                }
            );
    },

    async authMe() {
        let resp = await instance
            .get('auth/me');
        return resp.data


    },

    getProfile(id) {

        return instance
            .get('profile/' + id)
            .then(resp => {
                    return resp
                }
            );
    },

    getStatus(id) {
        return instance
            .get('profile/status/' + id)
            .then(resp => {
                    return resp.data
                }
            );
    },

    setStatus(status) {
        return instance
            .put('profile/status/', {
                status: status
            })
            .then(resp => {
                    return resp.data
                }
            );
    },


    updateProfile(profileObj) {
        return instance
            .put('profile', profileObj/*{
                userId: 11583,
                lookingForAJob: false,
                lookingForAJobDescription: 'уже есть',
                fullName: 'WD',
                aboutMe: 'Димыч, курсы - агонь!!!',
                contacts: {
                    github: '',
                    vk: '',
                    facebook: '',
                    instagram: '',
                    twitter: '',
                    website: 'localhost.com',
                    youtube: '',
                    mainLink: '',
                }
            }*/)
            .then(resp => {
                    return resp.data
                }
            );
    },

    async updateProfilePhoto(photo) {
        // https://docs.google.com/document/d/1ZSXmTzkgq_Kj1VbWuq8fTv_DPD95GFDvPZgqFeIYGoM/edit#heading=h.nnpkrs1rgfrd

        const formData = new FormData();
        formData.append('image', photo)
        let resp = await instance
            .put('profile/photo', formData,{ headers: {"Content-Type": "multipart/form-data" }});
        return resp.data;
    },


    auth(email, pass, remember = true, captcha = false) {
        console.log(email, pass, remember, captcha)
        return instance
            .post('auth/login', {
                email: email,
                password: pass,
                rememberMe: remember,
                captcha: captcha,

            })
            .then(resp => {
                    return resp.data
                }
            );
    },

    logOut() {
        console.log('logout1')
        return instance
            .delete('auth/login')
            .then(resp => {
                    console.log('logout')
                    return resp.data
                }
            );
    },


    getCaptcha() {
        return instance
            .get('security/get-captcha-url')
            .then(resp => {
                    return resp.data
                }
            );
    },


    getExamples() {
        return instance2
            .get('?action=get_examples')
            .then(resp => {
                    return resp.data
                }
            );
    },

    getGbPosts() {
        return instance2
            .get('?action=get_gb_posts')
            .then(resp => {
                    return resp.data
                }
            );
    }
}