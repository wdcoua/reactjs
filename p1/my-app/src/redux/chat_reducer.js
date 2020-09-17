
const ADD_CHAT_POST = 'ADD_CHAT_POST';
const NEW_CHAT_POST_CHANGE = 'NEW_CHAT_POST_CHANGE';
const GET_CHAT_NEW_POST_TEXT = 'GET_CHAT_NEW_POST_TEXT';

let initialState = {
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

const chat_reducer = (state = initialState,action) => {

    switch (action.type){
        case ADD_CHAT_POST: {
            let newChatPost = {

                id: 8,
                author: 'Котигорошко',
                authorAva: '/src/kotigoroshko.jpg',
                text: state.newChatPostText,
                date: '15:25 17-09-2020'


            }
            let stateCopy = {...state}
            stateCopy.chatPosts = [...state.chatPosts]
            stateCopy.chatPosts.push(newChatPost);
            stateCopy.newChatPostText = '';
            return stateCopy;
        }

        case NEW_CHAT_POST_CHANGE:{

            let stateCopy = {...state}
            stateCopy.newChatPostText = action.changedText;
            return stateCopy;
        }
        default:
            return state;
            //break;

    }

}

export default chat_reducer;


export const addChatPostActionCreator = () =>  {
    return {type: ADD_CHAT_POST};
}
export const newChatPostChangeActionCreator = (text) => {
    return {type: NEW_CHAT_POST_CHANGE,changedText: text};
}
export const gETChatNEWPOSTTEXTActionCreator = () =>  {
    return {type: GET_CHAT_NEW_POST_TEXT};
}
