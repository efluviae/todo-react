const RemoveButton = ({ todo, removeTodo }) => {
  return (
    <button className="actions__remove btn" onClick={() => removeTodo(todo.id)}>
      X
    </button>
  );
};

export default RemoveButton;
