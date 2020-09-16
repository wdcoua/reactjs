
const ADD_CHAT_POST = 'ADD_CHAT_POST';
const NEW_CHAT_POST_CHANGE = 'NEW_CHAT_POST_CHANGE';

const chat_reducer = (state,action) => {

    switch (action.type){
        case ADD_CHAT_POST:
            let newChatPost = {

                id: 8,
                author: 'Котигорошко',
                authorAva: '/src/kotigoroshko.jpg',
                text: state.newChatPostText,
                date: '15:25 17-09-2020'


            }
            state.chatPosts.push(newChatPost);
            state.newChatPostText = '';
            return state;
        case NEW_CHAT_POST_CHANGE:
            state.newChatPostText = action.changedText;
            return state;
        default:
            return state;
            //break;

    }

}

export default chat_reducer;