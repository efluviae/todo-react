import RemoveButton from "./RemoveButton";
import CompleteButton from "./CompleteButton";

const Actions = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div className="actions">
      <CompleteButton todo={todo} completeTodo={completeTodo} />
      <RemoveButton todo={todo} removeTodo={removeTodo} />
    </div>
  );
};

export default Actions;
