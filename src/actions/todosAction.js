import {ADD_TODO,TODO_DONE,TODO_NOT_DONE,ALL_TODO,DELETE_TODO,EDIT_TODO, SAVE_TODO} from './types.js'
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
export const allTodo=()=> {
    return {
        type:ALL_TODO ,
    }
}
export const deleteTodo=(id)=> {
    return {
        type:DELETE_TODO ,
        payload:id
    }
}
export const editTodo=(todo)=> {
    return {
        type:EDIT_TODO ,
        payload:todo ,
    }
}
export const saveTodo=(todo)=> {
    return {
        type:SAVE_TODO ,
        payload:todo ,
    }
}