
const NEW_GB_POST_CHANGE = 'NEW-GB-POST-CHANGE';
const ADD_GB_POST = 'ADD-GB-POST';

const gb_reducer = (state,action) => {
    //debugger;

    switch (action.type){

        case ADD_GB_POST:
            let newPost = {
                id: 5,
                text: state.newPostText,
                author: 'Марічка',
                authorID: '65',
                authorAva: 'https://avatarfiles.alphacoders.com/111/111521.png',
                date: '02:16 23-07-2020'
            }
            state.gbPosts.push(newPost);
            state.newPostText = '';

            return state;
        case NEW_GB_POST_CHANGE:
            state.newPostText = action.changedText;
            return state;

        default:
            return state;

    }


}

export default gb_reducer;