import * as axios from "axios";

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


     getUsers  (usersPerPage = 10, currentPage = 1)  {
        return instance
            .get('users/?count=' + usersPerPage + '&page=' + currentPage)
            .then(resp => {
                    return resp.data
                }
            );
    },

     follow  (id)  {
        return instance
            .post('follow/' + id)
            .then(resp => {
                    return resp.data
                }
            );
    },

     unfollow  (id)  {
        return instance
            .delete('follow/' + id)
            .then(resp => {
                    return resp.data
                }
            );
    },

     authMe  ()  {
        return instance
            .get('auth/me')
            .then(resp => {
                    return resp.data
                }
            );
    },

     getProfile (id) {
        return instance
            .get('profile/' + id)
            .then(resp => {
                    return resp.data
                }
            );
    },





    getExamples  ()  {
        return instance2
            .get('?action=get_examples')
            .then(resp => {
                    return resp.data
                }
            );
    },

    get_gb_posts ()  {
        return instance2
            .get('?action=get_gb_posts')
            .then(resp => {
                    return resp.data
                }
            );
    }
}