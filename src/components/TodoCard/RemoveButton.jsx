const RemoveButton = ({ todo, removeTodo }) => {
  return (
    <div className="remove">
      <img
        onClick={() => removeTodo(todo.id)}
        className="remove__trash-icon icon"
        src="./src/assets/trash.svg"
        alt="Remove Todo"
      />
    </div>
  );
};

export default RemoveButton;
