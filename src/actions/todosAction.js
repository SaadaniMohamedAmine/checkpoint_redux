import {ADD_TODO,TODO_DONE,TODO_NOT_DONE} from './types.js'
export const addTodo=(newTodo)=>{
    return {
        type:ADD_TODO,
        payload:newTodo
    }
} 

export const todoDone=(inp)=>{
    return {
        type:TODO_DONE ,
        payload:inp,
    }
}
export const todoNotDone=()=>{
    return {
        type:TODO_NOT_DONE,
    }
}