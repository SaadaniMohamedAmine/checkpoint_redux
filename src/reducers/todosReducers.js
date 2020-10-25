import {v4 as uuidv4} from 'uuid'
import {ADD_TODO,TODO_DONE,TODO_NOT_DONE} from '../actions/types'


const todos=[
    {
       id:uuidv4() ,
       title:"work",
       isDone:false
    },
    {
        id:uuidv4() ,
        title:"sleep",
        isDone:false,
     } ,
     {
        id:uuidv4() ,
        title:"eat",
        isDone:true,
     }
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