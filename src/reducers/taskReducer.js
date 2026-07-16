import { updateLocalStorage } from "../utils/localStorageUtils";

export const taskReducer = (state, action) => {
    // we'll store all new verions of task list state in -
    let updatedTask;

    //decide what to do based on action type
    switch (action.type) {
        case "ADD":
            updatedTask = [...state, action.payload];
            break;
        case "REMOVE":
            updatedTask = state.filter((task) => task.id !== action.payload)
            break;
        case "UPDATE":
            updatedTask = state.map((task) =>
                task.id === action.payload.taskID ? { ...task, text: action.payload.editText, priority: action.payload.editPriority } : task
            )
            break;
        case "TOGGLE":
            updatedTask = state.map((task) =>
                task.id === action.payload.id ? { ...task, done: !task.done } : task
            );
            break;
        case "SORT":
            updatedTask = [...state].sort((a, b) => a.priority - b.priority);
            break;
        // this will return default state values 
        default:
            updatedTask = state
    };

    updateLocalStorage(updatedTask);

    return updatedTask;

}