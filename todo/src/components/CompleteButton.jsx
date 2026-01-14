const CompleteButton = ({ todo, completeTodo }) => {
  return (
    <button
      className="actions__complete btn"
      onClick={() => completeTodo(todo.id)}
    >
      Completar
    </button>
  );
};

export default CompleteButton;
