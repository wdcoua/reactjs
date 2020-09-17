
const NEW_GB_POST_CHANGE = 'NEW-GB-POST-CHANGE';
const ADD_GB_POST = 'ADD-GB-POST';

let initialState = {
    gbPosts: [
        {id: 1, text: 'перший пост', author: 'Вано', authorID: '177', authorAva: 'https://avatarfiles.alphacoders.com/576/57620.jpg', date: '02:15 05-07-2020'},
        {id: 2, text: 'пост №2', author: 'Марічка', authorID: '65', authorAva: 'https://avatarfiles.alphacoders.com/111/111521.png', date: '02:16 05-07-2020'},
        {id: 3, text: 'третій', author: 'Гоги', authorID: '443', authorAva: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/UA/ru/999/EP3351-CUSA08250_00-AV00000000000128/1580140059000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000', date: '02:17 05-07-2020'},
        {id: 4, text: 'довгий 4-й пост для тесту, просто для тестууууу айл бі бек)))!!!11', author: 'Андрійко', authorID: '323', authorAva: 'https://avatarmaker.net/free-avatars/images/samurai.jpg', date: '02:18 05-07-2020'},

    ],
    newPostText: 'hi how are u?))',


}

const gb_reducer = (state = initialState,action) => {
    //debugger;

    switch (action.type){

        case ADD_GB_POST: {
            let newPost = {
                id: 5,
                text: state.newPostText,
                author: 'Марічка',
                authorID: '65',
                authorAva: 'https://avatarfiles.alphacoders.com/111/111521.png',
                date: '02:16 23-07-2020'
            }

            let stateCopy = {...state}
            stateCopy.gbPosts = [...state.gbPosts];
            stateCopy.gbPosts.push(newPost);
            stateCopy.newPostText = '';

            return stateCopy;
        }

        case NEW_GB_POST_CHANGE: {

            let stateCopy = {...state}
            stateCopy.newPostText = action.changedText;
            return stateCopy;
        }



        default:
            return state;

    }


}

export default gb_reducer;


export const addGBPostActionCreator = () =>  {
    return {type: ADD_GB_POST};
}

export const newGBpostChangeActionCreator = (text) => {
    return {type: NEW_GB_POST_CHANGE,changedText: text};
}
