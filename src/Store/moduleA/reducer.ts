/**
 *  Reducer update state
 * @param {IState}
 * @param {action}
 */
import { ACTION_TYPE, IAction, IState, ITodo } from '../../Config/Components/type';
function todoReducer(state: IState, action: IAction): IState {
    const { type, payload } = action;
    switch (type) {
        case ACTION_TYPE.ADD_TODO: {
            const addItem = {
                ...state,
                todoList: [...state.todoList, payload as ITodo],
            };
            return addItem;
        }
        case ACTION_TYPE.INIT_TODOLIST: {
            return {
                ...state,
                todoList: payload as ITodo[],
            };
        }
        case ACTION_TYPE.REMOVE_TODO: {
            const remove = {
                ...state,
                todoList: (payload as ITodo[]).filter((todo) => {
                    return todo.completed === false;
                }),
            };
            return remove;
        }
        case ACTION_TYPE.CHECK_TODO: {
            const toggle = {
                ...state,
                todoList: state.todoList.map((todo) => {
                    return todo.id === payload
                        ? {
                            ...todo,
                            completed: !todo.completed,
                        }
                        : todo;
                }),
            };
            return toggle;
        }
        case ACTION_TYPE.UPDATE_TODO: {
            const update = {
                ...state,
                todoList: state.todoList.map((todo) => {
                    return (todo.id === (payload as ITodo).id
                        ? {
                            ...todo,
                            content: (payload as ITodo).content
                        }
                        : todo)
                })
            }
            return update
        }
        default: {
            return state;
        }
    }
}
export { todoReducer };
