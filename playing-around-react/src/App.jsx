import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { TodoForm } from './components/todoForm'
import {TodoListComponent} from './components/TodoList';
import './App.css'

function App() {

  const [todoListData, setTodoListData] = useState([]);

  var handleCheckboxChange = (id) => {
      setTodoListData(prevTodos => (
          prevTodos.map(todo => {
              return todo.id === id ? { ...todo, completed: !todo.completed } : todo
          })
      ))

  }

  var deleteTodo = (id) => {
      setTodoListData(prevTodos => {

          return prevTodos.filter(todo => todo.id !== id);
      }
      )
  }

  const propsForTodoList = {
    todoListData: todoListData,
    handleCheckboxChange: handleCheckboxChange,
    deleteTodo: deleteTodo,
  };
  const propsForTodoForm = {
    setTodoListData
  };
  


  return <>
    <TodoForm  {...propsForTodoForm}/>
    <h1>Todo List:</h1>
    <TodoListComponent {...propsForTodoList}/>
  </>
    // <form onSubmit={handleSubmit} name="todoForm">
    //   <label htmlFor="labelForm">Todo: </label>
    //   <input type="text" onChange={e => setTodoText(e.target.value)} value={todoText}/> 
    //   <button >Agregar</button>
    //   <ul className='containerTodo'>{todoList.length==0 ? "No todos ": todoList}</ul>
    // </form>
  // )
}

export default App
