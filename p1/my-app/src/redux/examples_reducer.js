
let initialState = [
    {id:1,name:'Галерея'},
    {id:2,name:'Страховой калькулятор'},
    {id:3,name:'Форум 7pz.us'},
    {id:4,name:'Клик-клуб wklik.wovo4ka.ru'},
    {id:5,name:'Движок магазина цифровых товаров'},
    {id:6,name:'Движок для загруз-центра'},
    {id:7,name:'Продажа пикселей'},
    {id:8,name:'Крестики-нолики'},
    {id:9,name:'Сайт АссисТАС'},





]

const examples_reducer = (state = initialState,action) => {

    switch (action.type){
        // case GET_EXAMPLES:
        //     return state;
        //     break;
        default:
            return state;
            //break;

    }

    //return state;
}

export default examples_reducer;