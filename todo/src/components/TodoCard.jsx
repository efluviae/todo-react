import Actions from "./Actions.jsx";

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div
      className="todo-list__card"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <div className="todo-list__card__content">
        <p className="todo-list__card__text">{todo.text}</p>
        <p className="todo-list__card__category">({todo.category})</p>
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
