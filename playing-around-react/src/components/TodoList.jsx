import {useState} from 'react';
export function TodoListComponent(props) {
    var todoListData = props.todoListData;
    var handleCheckboxChange = props.handleCheckboxChange;


    var todoList = todoListData.map(todo => (

        <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <li >{todo.text}</li>
            <input type="checkbox" checked={todo.completed} onChange={() => handleCheckboxChange(todo.id)} />
            <button onClick={() => props.deleteTodo(todo.id)}>Delete</button>
        </div>
    )
    )


    return (
        <ul className='containerTodo'>{todoList.length == 0 ? "No todos " : todoList}</ul>
    )
}