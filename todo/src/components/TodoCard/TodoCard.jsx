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
  customCategories,
}) => {
  const getColorForCategory = () => {
    const customCategory = customCategories.find(
      (cat) => cat.name === todo.category,
    );
    return customCategory ? customCategory.color : todo.category.toLowerCase();
  };

  return (
    <div className={`todo-list__card${todo.isCompleted ? "--completed" : ""}`}>
      <div className="todo-list__card__content">
        <CompleteButton todo={todo} completeTodo={completeTodo} />
        <p className="todo-list__card__text">{todo.text}</p>
        <RemoveButton todo={todo} removeTodo={removeTodo} />
      </div>
      <div className="todo-list__card__sort">
        <div className="todo-list__card__sort__flags">
          {todo.category !== "Nenhuma" && (
            <p
              className="todo-list__card__category"
              data-color={getColorForCategory()}
              onClick={() => {
                setCategoryFilter(todo.category.toLowerCase());
              }}
            >
              {todo.category}
            </p>
          )}
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
        <div className="todo-list__card__sort__date">
          <p>{new Date(todo.selectedDate).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Todo;
