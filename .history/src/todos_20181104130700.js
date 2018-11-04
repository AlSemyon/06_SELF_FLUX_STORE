import {Dispatcher, ReduceStore} from './flux';
import {generate as id} from 'shortid';

const CREATE_TASK_ACTION = 'CREATE_TASK_ACTION';
const SHOW_COMPLETED_ACTION = 'SHOW_COMPLETED_ACTION';
const COMPLETE_TASK_ACTION = 'COMPLETE_TASK_ACTION';

const createTaskAction = (task) => ({
    type: CREATE_TASK_ACTION,
    payload: {task}
})

const showCompletedAction = (show) => ({
    type: SHOW_COMPLETED_ACTION,
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
            ],
            showComplete: true
        }
    }

    reduce(state, action) {
        const {type, payload} = action;
        let newState;
        switch(type) {
            case CREATE_TASK_ACTION:
                newState = {...state, tasks: [...state.tasks]};
                newState.tasks.push({
                    id: id(),
                    content: payload.task,
                    completed: false
                })
                return newState
            case SHOW_COMPLETED_ACTION:
                return {...state, showComplete: payload.show}
            case COMPLETE_TASK_ACTION:
                newState = {...state, tasks: [...state.tasks]};
                const idx = newState.tasks.findIndex(t => t.id === payload.id);
                newState.tasks[idx] = {...state.tasks[idx], completed: payload.completed}
                return newState
        }
        return state
    }
}

const taskStore = new TaskStore(todoDispatcher);


const TaskComponent = ({content, complete, id}) => {
    return `<section>
        ${content} <input type="checkbox" name="taskCompleteCheck" data-taskid="${id}" ${complete ? 'checked': ''}>
    </section>`;
}

const render = () => {
    const tasksSection = document.getElementById('tasks');
    const state = taskStore.getState();

    const rendered = state.tasks.map(TaskComponent).join('');
    tasksSection.innerHTML = rendered;
}

document.forms.newTask.addEventListener('submit', e => {
    e.preventDefault();
    let val = e.target.newTaskName.value;
    if(val) {
        todoDispatcher.dispatch(createTaskAction(val));
        val = ''
    }
}, false)

render();