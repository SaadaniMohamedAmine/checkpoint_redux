import {v4 as uuidv4} from 'uuid'
import {ADD_TODO,TODO_DONE,TODO_NOT_DONE,ALL_TODO,DELETE_TODO,EDIT_TODO, SAVE_TODO} from '../actions/types'


const data={
    todos:[
    {
       id:uuidv4() ,
       title:"React Hook",
       etat:"isDone"
    },
    {
        id:uuidv4() ,
        title:"React State",
        etat:'isDone',
     } ,
     {
        id:uuidv4() ,
        title:"React js",
        etat:"isDone",
     },
     {
      id:uuidv4() ,
      title:"React redux",
      etat:"notDone",
   },
   {
      id:uuidv4() ,
      title:"API",
      etat:"notDone",
   },
   {
      id:uuidv4() ,
      title:"Node Js",
      etat:"notDone",
   },
],
   filt:null ,
   save:null ,
}


 const todosReducer=(state=data,action) => {
   switch(action.type) {
      case ADD_TODO :
        return  {...state , todos : [...state.todos,action.payload]} ;
      case TODO_DONE :
         return {...state,filt:"isDone"} ; 
      case TODO_NOT_DONE:
            return {...state,filt:"notDone"} ;
      case ALL_TODO :
         return {...state,filt:null} ;
      case DELETE_TODO :
            return {...state,todos:state.todos.filter(el=>el.id!==action.payload)} ;
      case SAVE_TODO :
            return {...state,save : action.payload} ;

      case EDIT_TODO :
         return {...state,save:null,todos:state.todos.map(el=>el.id===action.payload.id ? action.payload : el)} ;      
      default :return state ;
   }
}

export default todosReducer ;