import { Store } from "./Store";

export class ReduceStore extends Store{
    constructor(dispatcher) {
        super(dispatcher);
        this.__histore = [];
    }    

    __onDispatch(action) {
        const newState = func(this.__state, action)
    }

    revertLastHistory() {

    }
}