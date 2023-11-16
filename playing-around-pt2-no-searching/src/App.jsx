import { useState, useTransition } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState([
    {id:1,text:"algo1",completed:false},
    {id:2,text:"algo2",completed:true},
  ]);


  const addTodo = () =>{
    setTodoList(prev=>[
      ...prev,
      {id:Math.ceil(Math.random()*100000),text:todoText,completed:false}
    ])
    setTodoText("");
  }

const handleDeleteTodo = (id) =>{
  setTodoList(prev=> prev.filter(todo=> todo.id !== id ))
}

const handleInputChange = (id)=>{
  setTodoList(prev=> prev.map(todo=> todo.id === id ? {...todo,completed : !todo.completed}:{...todo}))
}


return (
  <>
   <h1>Todo XD</h1>
   <input type="text" value={todoText} onChange={e=> setTodoText(e.target.value)} />
   <button onClick={addTodo}>Agregar todo</button>

   <ul className='Container'>
    {
      todoList.length === 0 ? "No hay todos" : 
      todoList.map(todo => {
        return <div key={todo.id}>
            {todo.id}
            <li>{todo.text}</li>
            <input type="checkbox" checked={todo.completed} onChange={()=>handleInputChange(todo.id)}/>
            <button onClick={()=>handleDeleteTodo(todo.id)}>delete</button>
        </div>
      })
    }
   </ul>
  </>
)
}

export default App
