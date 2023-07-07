import React, { useState } from 'react'

function TodoForm({ addTodo }){
    const[todo, setTodo] = useState("")

    const handleSubmit = () => {
        addTodo(todo)
        setTodo("")
    }

    return (
        <>
            <div>
                <input type="text" onChange={(e) => (setTodo(e.target.value))}/>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </div>
        </>
    )
}

export default TodoForm