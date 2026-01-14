const RemoveButton = ({ todo, removeTodo }) => {
  return (
    <button className="remove" onClick={() => removeTodo(todo.id)}>
      X
    </button>
  );
};

export default RemoveButton;
