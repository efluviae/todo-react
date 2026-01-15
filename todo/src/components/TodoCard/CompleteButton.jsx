import "../../index.css";

const CompleteButton = ({ todo, completeTodo }) => {
  return (
    <label className="complete__label">
      <input
        className="complete__checkbox"
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => completeTodo(todo.id)}
      />
    </label>
  );
};

export default CompleteButton;
