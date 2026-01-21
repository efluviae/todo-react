import TodoCard from "./TodoCard/TodoCard.jsx";
import "./TodoList.css";

const TodoList = ({
  todos,
  filter,
  search,
  sort,
  removeTodo,
  completeTodo,
  categoryFilter,
  setCategoryFilter,
  urgentFilter,
  setUrgentFilter,
  customCategories,
  selectedDate,
}) => {
  const filteredTodos = todos
    .filter((todo) =>
      filter === "all"
        ? true
        : filter === "completed"
          ? todo.isCompleted
          : !todo.isCompleted,
    )
    .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
    .filter((todo) =>
      categoryFilter === "all"
        ? true
        : todo.category.toLowerCase() === categoryFilter,
    )
    .filter((todo) => !urgentFilter || todo.isUrgent)
    .sort((a, b) => {
      const dateA = a.selectedDate ? new Date(a.selectedDate) : new Date(0);
      const dateB = b.selectedDate ? new Date(b.selectedDate) : new Date(0);
      return sort === "Asc" ? dateA - dateB : dateB - dateA;
    });

  return (
    <>
      <div className="todo-list">
        {filteredTodos.length === 0 ? (
          <>
            <p className="txt-center">Nenhuma tarefa encontrada</p>
          </>
        ) : (
          filteredTodos.map((todo) => (
            <TodoCard
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
              setCategoryFilter={setCategoryFilter}
              setUrgentFilter={setUrgentFilter}
              customCategories={customCategories}
              selectedDate={selectedDate}
            />
          ))
        )}
      </div>
    </>
  );
};

export default TodoList;
