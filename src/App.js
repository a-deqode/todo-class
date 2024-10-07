import React, { Component } from 'react';
import AddTodo from './AddTodo';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      input: '',
      editIndex: null
    };
  };

addTodo = () => {
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

render(){
  return (<div>
    <h1>Todo List</h1> // Main heading for the todo list
    <AddTodo
      input={this.state.input}
      addTodo={this.addTodo}
      handleInputChange={this.handleInputChange}
    />

  </div>
  );
}

}


export default App; 