import {Dispatcher} from './flux/Dispatcher'
import {Store} from './flux/Store'

// dispatcher
const panelDispatcher = new Dispatcher();

document.querySelector("#userNameInput").addEventListener('input', ({target}) => {
    const name = target.value;
    console.log("Dispatching ...");
    panelDispatcher.dispatch('TODO_NAMEINPUTACTION')
})

document.fontSizeForm.fontSize.forEach(item => {
    item.addEventListener('change', ({target}) => {
        console.log("Dispatching ...");
        panelDispatcher.dispatch('TODO_FONTUPACTION');
    }, false)
})

panelDispatcher.register( (action) => {
    console.log(action)
})

//store 

class UserProfStore extends Store {
    getInitialState(){
        return {username: 'Jim', fonstSize: 'small'}
    }

    __onDispatch(action){
        console.log('Store is going to dispatch', action);
        this.__emitChange();
    }

    getState(){
        return this.__state;
    }
}

const userProdStore = new UserProfStore(panelDispatcher);


//Actions 

const UPDATE_USERANME = 'UPDATE_USERANME';
const UPDATE_FONTSIZE = 'UPDATE_FONTSIZE';

const userNameUpdate = name = ({
    type: UPDATE_USERANME,
    payload: name
});

// const fontSizeUpdate = size = ({
//     type: UPDATE_FONTSIZE,
//     payload: size
// });