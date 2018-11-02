export class Store {
    constructor() {
        this.__listeners = [];
        this.__state = this.getInitialState(); 
    }

    addListener(listener) {
        this.__listeners.push(listener)
    }

    getInitialState() {
        throw new Error('getInitialState method must be override in subclasses')
    }
}