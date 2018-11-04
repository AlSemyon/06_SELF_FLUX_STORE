import {createStore, combineReducers} from 'redux';
import {generate  as id} from 'shortid';
import {data} from './data';


//события что должны быть
const SELECT_STATUS = 'SELECT_STATUS';
const ADD_PLAYER = 'ADD_PLAYER';

const playersReducer = (state = data.players, action)  => {
    //TODO описать редюсер для игрока
}

const statusReducer = (state = -1, action) => {
    //TODO описать редюсер статуса
}

const reducer = combineReducers({
    players: playersReducer,
    selectStatus: statusReducer
});

const store = createStore(reducer);
window.store = store;

const selectStatusAction = selectStatus => ({
    //TODO описать action function
})

const  addPlayerAction = name => ({
    //TODO описать action function
})

//TODO отрисовывать табличку по колонкам, так же отрисовывать option в селектах
//TODO добавить обработку событий на субмит формы addPlayer и изменения чекбокса 'status-select'