
import kot from "../images/kotigoroshko.jpg"
import za from "../images/zloy_admin.png"

const ADD_CHAT_POST = 'ADD_CHAT_POST';
const NEW_CHAT_POST_CHANGE = 'NEW_CHAT_POST_CHANGE';
//const GET_CHAT_NEW_POST_TEXT = 'GET_CHAT_NEW_POST_TEXT';

let initialState = {
    chatPosts: [
        {id: 1, author: 'Котигорошко', authorAva: kot, text: 'Привіт, ти тут?', date: '15:25 17-08-2020'},
        {id: 2, author: 'Admin', authorAva: za, text: 'Привіт, так', date: '15:26 17-08-2020'},
        {id: 3, author: 'Котигорошко', authorAva: kot, text: 'а ти можеш зробити мені сайт візитку?', date: '15:27 17-08-2020'},
        {id: 4, author: 'Котигорошко', authorAva: kot, text: 'і форум... скільки то буде коштувати?', date: '15:28 17-08-2020'},
        {id: 5, author: 'Admin', authorAva: za, text: '$17 000', date: '15:29 17-08-2020'},
        {id: 6, author: 'Котигорошко', authorAva: kot, text: 'Норм, давай реквізити, скину аванс ;)', date: '15:33 17-08-2020'},
    ],
    newChatPostText: 'this is Sparta!',
}

const chat_reducer = (state = initialState,action) => {

    switch (action.type){
        case ADD_CHAT_POST:
            let newChatPost = {
                id: state.chatPosts.length + 1,
                author: 'Котигорошко',
                authorAva: kot,
                text: action.text,
                date: '15:25 17-09-2020'
            }
            return {
                ...state,
                chatPosts: [...state.chatPosts,newChatPost],
                newChatPostText: ''
            }


        case NEW_CHAT_POST_CHANGE:
            return {
                ...state,
                newChatPostText: action.changedText
            }

        default:
            return state;
            //break;

    }

}

export default chat_reducer;


export const addChatPost = (text) =>  {
    return {type: ADD_CHAT_POST, text};
}
export const newChatPostChange = (text) => {
    return {type: NEW_CHAT_POST_CHANGE,changedText: text};
}
// export const getChatNewPostText = () =>  {
//     return {type: GET_CHAT_NEW_POST_TEXT};
// }
