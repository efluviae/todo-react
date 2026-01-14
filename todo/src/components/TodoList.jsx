import Todo from "./Todo.jsx";

const TodoList = ({
  todos,
  filter,
  search,
  sort,
  removeTodo,
  completeTodo,
}) => {
  return (
    <div className="todo-list">
      {todos
        .filter((todo) =>
          filter === "all"
            ? true
            : filter === "completed"
            ? todo.isCompleted
            : !todo.isCompleted
        )
        .filter((todo) =>
          todo.text.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) =>
          sort === "Asc"
            ? a.text.localeCompare(b.text)
            : b.text.localeCompare(a.text)
        )
        .map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
          />
        ))}
    </div>
  );
};

export default TodoList;
