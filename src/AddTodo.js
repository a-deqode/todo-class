import React, { Component } from 'react'; 

class AddTodo extends Component { 
  render() {
    const { input, addTodo, handleInputChange } = this.props;

    return (
      <form onSubmit={addTodo}> 
        <input
          type="text" 
          value={input}
          onChange={handleInputChange} 
          placeholder="Add a new todo" 
          required 
        />
        <button type="submit">Add</button> 
      </form>
    );
  }
}

export default AddTodo; 
