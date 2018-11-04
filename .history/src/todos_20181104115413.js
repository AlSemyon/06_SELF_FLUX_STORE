import {Dispatcher, ReduceStore} from './flux';
import {generate as id} from 'shortid';

const CREATE_TASK_ACTION = 'CREATE_TASK_ACTION';
const SHOW_TASK_ACTION = 'SHOW_TASK_ACTION';
const COMPLETE_TASK_ACTION = 'COMPLETE_TASK_ACTION';

const createTaskAction = (task) => ({
    type: CREATE_TASK_ACTION,
    payload: {task}
})

const showTaskAction = (show) => ({
    type: SHOW_TASK_ACTION,
    payload: {show}
})

const completeTaskAction = (id, completed) => ({
    type: COMPLETE_TASK_ACTION,
    payload: {id , completed}
})

const todoDispatcher = new Dispatcher();

class TaskStore extends ReduceStore{
    getInitialState() {
        return {
            tasks: [
                {
                    id: id(),
                    content: 'first task',
                    completed: false
                },
                {
                    id: id(),
                    content: 'second task',
                    completed: false
                },                {
                    id: id(),
                    content: 'third task',
                    completed: false
                },
            ]
        }
    }
}

