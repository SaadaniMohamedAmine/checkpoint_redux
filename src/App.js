import React,{useState} from 'react' 
import './App.css' 
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
        <div className='todoApp'>
        <div className='filter'>
        <input type="text" name=""  id="" onChange={(e)=>setInput(e.target.value)}/>
        <button className='btn-test' onClick={()=>dispatch(addTodo({id:uuidv4(),title:input,isDone:false}))}>Add todo</button>
        </div>
      <div className="list">
      {todos.map(todo=>(
        <div className="todo">
          <h4>{todo.title}</h4>
          <button className="btn">Delete</button>
        </div>
      ))}
      </div>
      <div className="filter">
      <button className='btn-test'onClick={()=>dispatch(todoDone())}>todos Done !</button>
        <button className='btn-test' onClick={()=>dispatch(todoNotDone())}>todos not Done !!</button>
      </div>
        </div>
    </div>
  )
}

export default App ;