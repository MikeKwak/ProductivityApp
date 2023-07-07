import React, { useState } from 'react';
import TodoForm from './TodoForm'
import TodoList from './TodoList'

// interface Todo{
//     id: Number;
//     title: String;
//     completed: Boolean;
//     createdAt: Date;
// }

function TodoApp(){
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
        console.log(todos)
    };

    const deleteTodo = (todoId) => {
        const updatedTodos = todos.filter((todo) => todo.id !== todoId);
        setTodos(updatedTodos);
      };
    
    return (
        <>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} deleteTodo={deleteTodo} />
        </>
    )
}

export default TodoApp