import Actions from "./Actions.jsx";

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <Actions
        todo={todo}
        removeTodo={removeTodo}
        completeTodo={completeTodo}
      />
    </div>
  );
};

export default Todo;
