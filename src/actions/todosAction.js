import {ADD_TODO,TODO_DONE,TODO_NOT_DONE} from './types.js'
export const addTodo=(newTodo)=>{
    return {
        type:ADD_TODO,
        payload:newTodo
    }
} 

export const isDone=()=>{
    return {
        type :TODO_DONE,
    }
}
export const notDone=()=>{
    return {
        type:TODO_NOT_DONE,
    }
}