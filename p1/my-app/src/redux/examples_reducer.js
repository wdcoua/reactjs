

import {API} from "../api/api";

let initialState = {
    examplesList: [
        // {id:1,name:'Галерея'},
        // {id:2,name:'Страховой калькулятор'},
    ]
}

const SET_EXAMPLES = 'SET_EXAMPLES';
const DEL_EXAMPLE = 'DEL_EXAMPLE';
const ADD_EXAMPLE = 'ADD_EXAMPLE';

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
        case DEL_EXAMPLE:
            // debugger
            return {
                ...state,
                // examplesList: [...state.examplesList, ...action.examples]
                examplesList: state.examplesList.filter(ex => ex.id !== action.id )
            }
        case ADD_EXAMPLE:
            // debugger
            return {
                ...state,
                // examplesList: [...state.examplesList, ...action.examples]
                examplesList: [...state.examplesList, action.example]
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

export const delExample = (id) => {
    return {type: DEL_EXAMPLE, id};
}

export const addNewExample = (example) => {
    return {type: ADD_EXAMPLE, example};
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