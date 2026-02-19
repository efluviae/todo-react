import trashIcon from "../../assets/trash.svg";

const RemoveButton = ({ todo, removeTodo }) => {
  return (
    <div className="remove">
      <img
        onClick={() => removeTodo(todo.id)}
        className="remove__trash-icon icon"
        src={trashIcon}
        alt="Remove Todo"
      />
    </div>
  );
};

export default RemoveButton;
