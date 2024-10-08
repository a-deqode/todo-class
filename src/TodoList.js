import React, { Component } from 'react'; 
import TodoItem from './TodoItem'; 

class TodoList extends Component { 
  render() { 
    const { todos, toggleTodo, deleteTodo, startEdit } = this.props;

    return (
      <ul> 
        {todos.map((todo, index) => (  
          <TodoItem 
            key={index} 
            index={index} 
            todo={todo} 
            toggleTodo={toggleTodo} 
            deleteTodo={deleteTodo} 
            startEdit={startEdit} 
          />
        ))}
      </ul>
    );
  }
}

export default TodoList; 

