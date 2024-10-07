import React from 'react'; 
const AddTodo = ({ input, addTodo, handleInputChange }) => { 
  return (
    <form onSubmit={addTodo}> // Set the form submission handler to addTodo
      <input
        type="text"
        value={input} 
        onChange={handleInputChange}
        placeholder="Add a new todo" 
        required 
      />
      <button type="submit">Add</button> // Button to submit the form
    </form>
  );
};

export default AddTodo; 