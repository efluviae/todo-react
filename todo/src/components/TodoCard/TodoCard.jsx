import Actions from "./Actions.jsx";
import CompleteButton from "./CompleteButton.jsx";
import RemoveButton from "./RemoveButton.jsx";
import "./TodoCard.css";

const Todo = ({
  todo,
  removeTodo,
  completeTodo,
  setCategoryFilter,
  setUrgentFilter,
}) => {
  return (
    <div className={`todo-list__card${todo.isCompleted ? "--completed" : ""}`}>
      <div className="todo-list__card__content">
        <CompleteButton todo={todo} completeTodo={completeTodo} />
        <p className="todo-list__card__text">{todo.text}</p>
        <p
          className={`todo-list__card__category category--${todo.category.toLowerCase()}`}
          onClick={() => {
            setCategoryFilter(todo.category.toLowerCase());
          }}
        >
          {todo.category}
        </p>
        {todo.isUrgent && (
          <p
            className="todo-list__card__urgent"
            onClick={() => {
              setUrgentFilter(todo.isUrgent);
            }}
          >
            Urgente
          </p>
        )}
      </div>
      <RemoveButton todo={todo} removeTodo={removeTodo} />
    </div>
  );
};

export default Todo;
