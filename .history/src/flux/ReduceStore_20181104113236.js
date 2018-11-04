import { Store } from "./Store";

export class ReduceStore extends Store{
    constructor(dispatcher) {
        super(dispatcher);
        this.__history = [];
    }    

    __onDispatch(action) {
        const newState = func(this.__state, action);
        if (newState !== this.__state) {
            this.__history.push(this.__state);
            this.__state = newState;
            this.__emitChange();
        }
    }

    revert() {
        this.__state = this.__history.pop();
    }
}