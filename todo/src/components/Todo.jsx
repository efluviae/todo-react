import CompleteButton from "./CompleteButton.jsx";
import RemoveButton from "./RemoveButton.jsx";

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
      <div className="actions">
        <CompleteButton todo={todo} completeTodo={completeTodo} />
        <RemoveButton todo={todo} removeTodo={removeTodo} />
      </div>
    </div>
  );
};

export default Todo;
