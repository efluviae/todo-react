const CompleteButton = ({ todo, completeTodo }) => {
  return (
    <button className="complete" onClick={() => completeTodo(todo.id)}>
      Completar
    </button>
  );
};

export default CompleteButton;
