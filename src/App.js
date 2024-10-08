import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      input: '',
      editIndex: null
    };
  };

addTodo = (event) => {
  event.preventDefault();
  const { input, todos, editIndex } = this.state;


  if (input.trim() === '') {
    alert('Please enter a todo item!');
    return;

  }
  if (editIndex !== null) {
    const updatedTodos = todos.map((todo, index) =>
      index === editIndex ? { ...todo, text: input } : todo
    );
    this.setState({
      todos: updatedTodos,
      input: '',
      editIndex: null,
    });
  } else {

    const newTodo = { text: input, completed: false };
    this.setState({
      todos: [...todos, newTodo],
      input: '',
    });
  };
};

toggleTodo = (index) => {
  this.setState((prevState) => { 
    const todos = [...prevState.todos]; 
    todos[index].completed = !todos[index].completed; 
    return { todos }; 
  });
};

deleteTodo = (index) => {
  this.setState((prevState) => { 
    const todos = [...prevState.todos]; 
    todos.splice(index, 1);
    return { todos }; 
  });
};

handleInputChange = (event) => { 
  this.setState({ input: event.target.value }); 
};

startEdit = (index) => { 

  this.setState({ input: this.state.todos[index].text, editIndex: index });
};

render(){
  return (<div>
    <h1>Todo List</h1> 
    <AddTodo
      input={this.state.input}
      addTodo={this.addTodo}
      handleInputChange={this.handleInputChange}
    />
            <TodoList
          todos={this.state.todos} 
          toggleTodo={this.toggleTodo} 
          deleteTodo={this.deleteTodo} 
          startEdit={this.startEdit} 
        />

  </div>
  );
}

}


export default App; 