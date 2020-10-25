import React,{useState} from 'react' 
import './App.css' 
//import {connect} from 'react-redux' ;
import {useSelector,useDispatch} from 'react-redux'
import {addTodo,todoDone,todoNotDone} from './actions/todosAction'
import {v4 as uuidv4} from 'uuid'

const App=(s)=> {
  const todos=useSelector((state=>state.todosReducer)) ;
  const [input,setInput]=useState("");
  const [inout1,setInput1]=useState("");
  const dispatch=useDispatch(); 
  return (
    <div className="App">
      <header className="App-header">
        <input type="text" name=""  id="" onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={()=>dispatch(addTodo({id:uuidv4(),title:input,isDone:false}))}>Add todo</button>
        <button onClick={()=>dispatch(todoDone())}>todos Done !</button>
        <button onClick={()=>dispatch(todoNotDone())}>todos not Done !!</button>
      {todos.map(todo=>(
        <div className="todo">
          <h4>{todo.title}</h4>
          <button>Delete</button>
        </div>
      ))}
      </header>
    </div>
  )
}
/*const mapStateToProps=(state)=>{
  return  {
    todos:state.todosReducer ,
  }
}
export default connect(mapStateToProps)(App);*/
export default App ;