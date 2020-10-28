import React,{useState , useEffect} from 'react' 
import './App.css' 
import {useSelector,useDispatch} from 'react-redux'
import {addTodo,allTodo,isDone,notDone,deleteTodo,editTodo, saveTodo} from './actions/todosAction'
import {v4 as uuidv4} from 'uuid'

const App=(s)=> {
  const todos=useSelector((state=>state.todosReducer)) ;
  const [input,setInput]=useState("");
  //const [inout1,setInput1]=useState("");
  const dispatch=useDispatch();  
  
useEffect(() => {
  if(todos.save){
    setInput(todos.save.title)
  }
} , [todos.save])
  const add = () => {
    if(input) {
      if(!todos.save ) 
      {dispatch(addTodo({id:uuidv4(),title:input,etat:'notDone'}))
    setInput("") ;
    }
      else {dispatch(editTodo({...todos.save,title:input}))
    setInput("");
    }
    }
    
  }
  return (
    <div className="App">
        <div className='todoApp'>
        <div className='filter'>
        <input type="text" name="" value={input} id="" onChange={(e)=>setInput(e.target.value)}/>
        <button className='btn-test' onClick={add}>Add todo</button>
        </div>
      <div className="list">
      {
        todos.filt? todos.todos.filter(el=>el.etat==todos.filt)
        .map(el=>(
          <div className="todo">
            <h4 className="title-todo">{el.title}</h4>
            <button className="btn" onClick={()=>dispatch(deleteTodo(el.id))}>Delete</button>
            <button className='btn' onClick={()=>((dispatch(saveTodo(el))))}>Edit</button> ;
          </div>
        )) 
        : todos.todos.map(el=>          <div className="todo">
            <h4 className="title-todo">{el.title}</h4>
            <button className="btn" onClick={()=>dispatch(deleteTodo(el.id))}>Delete</button>
            <button className='btn' onClick={()=>((dispatch(saveTodo(el))))}>Edit</button>
          </div>
        )
      }
      
      </div>
      <div className="filter">
      <button className='btn-test' onClick={()=>dispatch(isDone())}>todos Done !</button>
        <button className='btn-test' onClick={()=>dispatch(notDone())}>todos not Done !!</button>
        <button className='btn-test' onClick={()=>dispatch(allTodo())}>Remover filter</button> 
      </div>
        </div>
    </div>
  )
}

export default App ;