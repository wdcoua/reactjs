import React from "react";
import User from "./User/UserView";
import * as axios from 'axios';

const Users = (props) => {
     // debugger
    if(props.users.length === 0){

        let apiKey = 'ada3692f-cdc4-4c82-9079-5847319d88fc';

        const instance = axios.create({
            withCredentials: true,
            baseURL: 'https://wd.co.ua/api.php',
            headers: {
                'API-KEY': apiKey
            }

        });

        instance
            .get('?action=users&eee')
            // .get('https://social-network.samuraijs.com/api/1.0/users/?count=20&page=250')
            .then(resp => {
                // debugger
                props.setUsers(resp.data.items)
                console.log(resp)
            })

            // .put('profile/status',
            //     {
            //         //userId:11583,
            //
            //             status: 'Put-запрос покорён! =)'
            //
            //
            //     })

             // .get('?auth/me')
            // .post('?auth/login?email=wd.co.ua@gmail.com&password=C2dNA6yuHkbMVej&rememberMe=true')
            // .then(resp => {
            //         // props.setUsers(resp.data.items)
            //         console.log(resp)
            //     })
            .catch(error => {
                console.warn(error);
            });

        // props.setUsers(
        //     [
        //     {
        //         id: 1,
        //         nick: 'Kot45',
        //         pass: 'fJJhruvdh35hH',
        //         name: 'Петрик',
        //         status: 'hello=)',
        //         city: 'Toronto',
        //         country: 'Canada',
        //         regdate: '15:25 17-08-2020',
        //         lastdate: '14:06 19-09-2020',
        //         followed: true
        //     },
        //     {
        //         id: 2,
        //         nick: 'wd3',
        //         pass: 'fdgdrgf456JJ',
        //         name: 'WD',
        //         status: 'i\'m boss here',
        //         city: 'Kyiv',
        //         country: 'UA',
        //         regdate: '15:25 16-08-2020',
        //         lastdate: '12:06 19-09-2020',
        //         followed: false
        //     },
        //     {
        //         id: 3,
        //         nick: 'hanna',
        //         pass: 'rerfe545gfFGf',
        //         name: 'Ганна',
        //         status: 'усім привіт',
        //         city: 'Львів',
        //         country: 'Україна',
        //         regdate: '15:25 16-08-2020',
        //         lastdate: '12:06 19-09-2020',
        //         followed: false
        //     }
        // ]
        // )
    }

    return (
        <div>
            {props.users.map(u => {
                // debugger
                // console.log(u.id)
                return <User key={u.id}
                      user={u} changeFollowStatus={props.changeFollowStatus}
                />
            })}
        </div>
    );
}

export default Users;