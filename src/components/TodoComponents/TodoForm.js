import React from "react";

const TodoForm = props => {
  return (
    <div>
      <form onSubmit={props.addTask}>
        <input
          type="text"
          name="inputText"
          placeholder="add new todo item"
          value={props.inputText}
          onChange={props.handleChange}
        />
        <button type="submit">Add Todo</button>
        <button onClick={props.clearCompletedTasks}>Clear Completed</button>
      </form>
    </div>
  );
};

export default TodoForm;