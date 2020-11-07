
// let initialState = [
//     {id:1,name:'Галерея'},
//     {id:2,name:'Страховой калькулятор'},
//     {id:3,name:'Форум 7pz.us'},
//     {id:4,name:'Клик-клуб wklik.wovo4ka.ru'},
//     {id:5,name:'Движок магазина цифровых товаров'},
//     {id:6,name:'Движок для загруз-центра'},
//     {id:7,name:'Продажа пикселей'},
//     {id:8,name:'Крестики-нолики'},
//     {id:9,name:'Сайт АссисТАС'},
//
// ]

import {API} from "../api/api";

let initialState = {
    examplesList: [
        // {id:1,name:'Галерея'},
        // {id:2,name:'Страховой калькулятор'},
    ]
}

const SET_EXAMPLES = 'SET_EXAMPLES';

const examples_reducer = (state = initialState,action) => {

    switch (action.type){
        // case GET_EXAMPLES:
        //     return state;
        //     break;
        case SET_EXAMPLES:
            // debugger
            return {
                ...state,
                // examplesList: [...state.examplesList, ...action.examples]
                examplesList: [ ...action.examples]
            }
        default:
            return state;
            //break;

    }

    //return state;
}

export default examples_reducer;




export const setExamples = (examples) => {
    return {type: SET_EXAMPLES, examples: examples};
}


// thunk-и

export const getExamples = () => {
    return (dispatch) => {

        API.getExamples()
            // .get('https://social-network.samuraijs.com/api/1.0/users/?count=20&page=250')
            .then(data => {
                // debugger
                dispatch(setExamples(data.items))
                // console.log(resp)
            })

            .catch(error => {
                console.warn(error);
            });
    }
}