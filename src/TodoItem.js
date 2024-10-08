import React, { Component } from 'react';

class TodoItem extends Component {
    render() { 
        const { todo, index, toggleTodo, deleteTodo, startEdit } = this.props; 

        return (
            <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}> 
                <span onClick={() => toggleTodo(index)} style={{ cursor: 'pointer' }}> 
                    {todo.text} 
                </span>
                <button onClick={() => startEdit(index)}>Edit</button> 
                <button onClick={() => deleteTodo(index)}>Delete</button> 
            </li>
        );
    }
}

export default TodoItem; 

