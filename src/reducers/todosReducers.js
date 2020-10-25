import {v4 as uuidv4} from 'uuid'
import {ADD_TODO,TODO_DONE,TODO_NOT_DONE} from '../actions/types'


const todos=[
    {
       id:uuidv4() ,
       title:"React Hook",
       isDone:true
    },
    {
        id:uuidv4() ,
        title:"React State",
        isDone:true,
     } ,
     {
        id:uuidv4() ,
        title:"React js",
        isDone:true,
     },
     {
      id:uuidv4() ,
      title:"React redux",
      isDone:true,
   },
   {
      id:uuidv4() ,
      title:"API",
      isDone:false,
   },
   {
      id:uuidv4() ,
      title:"Node Js",
      isDone:false,
   },
]


 const todosReducer=(state=todos,action) => {
   switch(action.type) {
      case ADD_TODO :
        return  [...state,action.payload] ;
      case TODO_DONE :
         return state.filter(elt=>elt.isDone==true) ; 
         case TODO_NOT_DONE:
            return state.filter(elt=>elt.isDone==false) ;
        default :return state ;
   }
}

export default todosReducer ;