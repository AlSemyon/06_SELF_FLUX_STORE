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
        const {type, payload} = action;

        switch(type) {
            case UPDATE_USERANME:
                this.__state.username = payload;   
                this.__emitChange();
                break;
            case UPDATE_FONTSIZE:
                this.__state.fonstSize = payload;
                this.__emitChange();
                break;
        }
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

UserProfStore.addEventListener(state => {
    const {username, fontSize} = state;
    document.getElementById('userName').innerHTML = username;
    document.getElementById('content-page').style.fontSize = fontSize === 'small' ? '16px' : '24px';
})

const render = () => {

}