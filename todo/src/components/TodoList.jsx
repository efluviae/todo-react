import TodoCard from "./TodoCard.jsx";

const TodoList = ({
  todos,
  filter,
  search,
  sort,
  removeTodo,
  completeTodo,
}) => {
  const filteredTodos = todos
    .filter((todo) =>
      filter === "all"
        ? true
        : filter === "completed"
        ? todo.isCompleted
        : !todo.isCompleted
    )
    .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) =>
      sort === "Asc"
        ? a.text.localeCompare(b.text)
        : b.text.localeCompare(a.text)
    );

  return (
    <div className="todo-list">
      {filteredTodos.length === 0
        ? "Nenhuma tarefa encontrada"
        : filteredTodos.map((todo) => (
            <TodoCard
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
