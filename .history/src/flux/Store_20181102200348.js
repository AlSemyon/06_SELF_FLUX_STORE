export class Store {
    constructor(dispatcher) {
        this.__listeners = [];
        this.__state = this.getInitialState();
        dispatcher.register(this.__onDispatch.bind(this)) 
    }

    __onDispatch() {
        throw new Error('getInitialState method must be override in subclasses')
    }

    addListener(listener) {
        this.__listeners.push(listener)
    }

    getInitialState() {
        throw new Error('getInitialState method must be override in subclasses')
    }
}