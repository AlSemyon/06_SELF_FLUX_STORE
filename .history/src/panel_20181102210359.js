import {Dispatcher} from './flux/Dispatcher'
import {Store} from './flux/Store'

// dispatcher
const panelDispatcher = new Dispatcher();

document.querySelector("#userNameInput").addEventListener('input', ({target}) => {
    const name = target.value;
    panelDispatcher.dispatch(userNameUpdate(name))
})

document.fontSizeForm.fontSize.forEach(item => {
    item.addEventListener('change', ({target}) => {
        const size = target.value;
        panelDispatcher.dispatch(fontSizeUpdate(size));
    }, true)
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

const userProfStore = new UserProfStore(panelDispatcher);

userProfStore.addListener(state => {
    console.log("current state is", state);
})

//Actions 

const UPDATE_USERANME = 'UPDATE_USERANME';
const UPDATE_FONTSIZE = 'UPDATE_FONTSIZE';

const userNameUpdate = name => ({
    type: UPDATE_USERANME,
    payload: name
});

const fontSizeUpdate = size => ({
    type: UPDATE_FONTSIZE,
    payload: size
});