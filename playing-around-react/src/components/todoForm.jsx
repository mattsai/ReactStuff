import { useState } from "react";



export function TodoForm(props) {

  const [todoText,setTodoText] = useState("");

  
    var handleSubmit = (e) => {
        if (todoText==="") return
        e.preventDefault();
        props.setTodoListData(prev => (
          [
            ...prev,
            {
              id:  Math.floor(Math.random()*1000),
              text:todoText,
              completed:false
            }
          ]
        ))
        setTodoText("");
    }


    return (
        <form onSubmit={handleSubmit} name="todoForm">
        <label htmlFor="labelForm">Todo: </label>
        <input type="text" onChange={e => setTodoText(e.target.value)} value={todoText}/> 
        <button >Agregar</button>
        </form>
    )
}