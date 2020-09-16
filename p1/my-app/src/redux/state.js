import gb_reducer from "./gb_reducer";
import examples_reducer from "./examples_reducer";
import chat_reducer from "./chat_reducer";
// import src from "../../src/images"

const GET_GB_NEW_POST_TEXT = 'GET-GB-NEW-POST-TEXT';
const NEW_GB_POST_CHANGE = 'NEW-GB-POST-CHANGE';
const ADD_GB_POST = 'ADD-GB-POST';
const ADD_CHAT_POST = 'ADD_CHAT_POST';
const NEW_CHAT_POST_CHANGE = 'NEW_CHAT_POST_CHANGE';
const GET_CHAT_NEW_POST_TEXT = 'GET_CHAT_NEW_POST_TEXT';

let all_data = { //store

    _state: {
        gb: {
            gbPosts: [
                {id: 1, text: 'перший пост', author: 'Вано', authorID: '177', authorAva: 'https://avatarfiles.alphacoders.com/576/57620.jpg', date: '02:15 05-07-2020'},
                {id: 2, text: 'пост №2', author: 'Марічка', authorID: '65', authorAva: 'https://avatarfiles.alphacoders.com/111/111521.png', date: '02:16 05-07-2020'},
                {id: 3, text: 'третій', author: 'Гоги', authorID: '443', authorAva: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/UA/ru/999/EP3351-CUSA08250_00-AV00000000000128/1580140059000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000', date: '02:17 05-07-2020'},
                {id: 4, text: 'довгий 4-й пост для тесту, просто для тестууууу айл бі бек)))!!!11', author: 'Андрійко', authorID: '323', authorAva: 'https://avatarmaker.net/free-avatars/images/samurai.jpg', date: '02:18 05-07-2020'},

            ],
            newPostText: 'hi how are u?))',


        },

        examples: [
            {id:1,name:'Галерея'},
            {id:2,name:'Страховой калькулятор'},
            {id:3,name:'Форум 7pz.us'},
            {id:4,name:'Клик-клуб wklik.wovo4ka.ru'},
            {id:5,name:'Движок магазина цифровых товаров'},
            {id:6,name:'Движок для загруз-центра'},
            {id:7,name:'Продажа пикселей'},
            {id:8,name:'Крестики-нолики'},
            {id:9,name:'Сайт АссисТАС'},





        ],
        chat:{
            chatPosts: [
                {id: 1, author: 'Котигорошко', authorAva: 'kotigoroshko.jpg', text: 'Привіт, ти тут?', date: '15:25 17-08-2020'},
                {id: 2, author: 'Admin', authorAva: '/src/images/zloy_admin.png', text: 'Привіт, так', date: '15:26 17-08-2020'},
                {id: 3, author: 'Котигорошко', authorAva: '/src/kotigoroshko.jpg', text: 'а ти можеш зробити мені сайт візитку?', date: '15:27 17-08-2020'},
                {id: 4, author: 'Котигорошко', authorAva: '/src/kotigoroshko.jpg', text: 'і форум... скільки то буде коштувати?', date: '15:28 17-08-2020'},
                {id: 5, author: 'Admin', authorAva: '/src/zloy_admin.png', text: '$17 000', date: '15:29 17-08-2020'},
                {id: 6, author: 'Котигорошко', authorAva: '/src/kotigoroshko.jpg', text: 'Норм, давай реквізити, скину аванс ;)', date: '15:33 17-08-2020'},
            ],
            newChatPostText: 'this is Sparta!',
        }

    },
    _callSubscriber () { // _rerenderEntireTree   _subscriber
        console.log('state changed');
    },

    getState(){ //
        return this._state;
    },
    assign_renderer(observer) { // subscribe
        this._callSubscriber = observer;
    },


    dispatch(action){   // {    type: 'ADD-POST'    }

        this._state.gb = gb_reducer(this._state.gb,action);
        this._state.examples = examples_reducer(this._state.examples,action);
        this._state.chat = chat_reducer(this._state.chat,action);
        this._callSubscriber(this._state);


        //
        // switch (action.type){
        //     case ADD_CHAT_POST:
        //         let newChatPost = {
        //
        //             id: 8,
        //             author: 'Котигорошко',
        //             authorAva: '/src/kotigoroshko.jpg',
        //             text: this._state.chat.newChatPostText,
        //             date: '15:25 17-09-2020'
        //
        //
        //         }
        //         this._state.chat.chatPosts.push(newChatPost);
        //         this._state.chat.newChatPostText = '';
        //         this._callSubscriber(this._state);
        //         break;
        //     case ADD_GB_POST:
        //         let newPost = {
        //             id: 5,
        //             text: this._state.gb.newPostText,
        //             author: 'Марічка',
        //             authorID: '65',
        //             authorAva: 'https://avatarfiles.alphacoders.com/111/111521.png',
        //             date: '02:16 23-07-2020'
        //         }
        //         this._state.gb.gbPosts.push(newPost);
        //         this._state.gb.newPostText = '';
        //         this._callSubscriber(this._state);
        //         break;
        //     case NEW_GB_POST_CHANGE:
        //         this._state.gb.newPostText = action.changedText;
        //         this._callSubscriber(this._state);
        //         break;
        //     case NEW_CHAT_POST_CHANGE:
        //         this._state.chat.newChatPostText = action.changedText;
        //         this._callSubscriber(this._state);
        //         break;
        //     case GET_GB_POSTS:
        //         return this._state.gb.gbPosts;
        //         break;
        //     case GET_GB_BRANCH: // not used
        //         return this._state.gb;
        //         break;
        //     case GET_GB_NEW_POST_TEXT:
        //         return this._state.gb.newPostText;
        //         break;
        //     case GET_CHAT_NEW_POST_TEXT:
        //         return this._state.chat.newChatPostText;
        //         break;
        //     case GET_EXAMPLES:
        //         return this._state.examples;
        //         break;
        //     case GET_CHAT_POSTS:
        //         return this._state.chat.chatPosts;
        //         break;
        //     default:
        //         break;
        //
        // }

    },

}

export const addPostActionCreator = () =>  {
    return {type: ADD_GB_POST};
}
export const addChatPostActionCreator = () =>  {
    return {type: ADD_CHAT_POST};
}

export const newGBpostChangeActionCreator = (text) => {
    return {type: NEW_GB_POST_CHANGE,changedText: text};
}

export const newChatPostChangeActionCreator = (text) => {
    return {type: NEW_CHAT_POST_CHANGE,changedText: text};
}
export const gETChatNEWPOSTTEXTActionCreator = () =>  {
    return {type: GET_CHAT_NEW_POST_TEXT};
}
export const gETGBNEWPOSTTEXTActionCreator = () =>  {
    return {type: GET_GB_NEW_POST_TEXT};
}

export default all_data;
window.all_data = all_data;