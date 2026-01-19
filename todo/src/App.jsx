import { useEffect, useState } from "react";
import Search from "./components/Search.jsx";
import Filter from "./components/Filter.jsx";
import TodoList from "./components/TodoList.jsx";
import AddCategoryPopup from "./components/AddCategoryPopup.jsx";
import ThemeSelector from "./components/ThemeSelector/ThemeSelector.jsx";
import { getItem, setItem } from "./utils/localStorage.jsx";
import "./App.css";
import "./index.css";

function App() {
  const [todos, setTodos] = useState(() => {
    const item = getItem("TODOS");
    return item || [];
  });
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("Asc");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [urgentFilter, setUrgentFilter] = useState(false);
  const [customCategories, setCustomCategories] = useState(() => {
    const item = getItem("CUSTOM_CATEGORIES");
    return item || [];
  });
  const [isAddCategoryPopupOpen, setIsAddCategoryPopupOpen] = useState(false);

  /* get items from localStorage */
  useEffect(() => {
    setItem("CUSTOM_CATEGORIES", customCategories);
  }, [customCategories]);

  useEffect(() => {
    setItem("TODOS", todos);
  }, [todos]);

  const addTodo = (text, category, isUrgent) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 1000000),
        text,
        category,
        isCompleted: false,
        isUrgent,
      },
    ];

    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null,
    );
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) => {
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo;
    });
    setTodos(newTodos);
  };

  const addCategory = (category) => {
    setCustomCategories([...customCategories, category]);
  };

  const toggleAddCategoryPopup = () => {
    setIsAddCategoryPopupOpen(!isAddCategoryPopupOpen);
  };

  return (
    <div className="app">
      <div className="header">
        <h1 className="header__title">Lista de Tarefas</h1>
        <ThemeSelector />
      </div>
      <Search
        search={search}
        setSearch={setSearch}
        addTodo={addTodo}
        customCategories={customCategories}
      />

      <div className="divider"></div>

      <Filter
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        urgentFilter={urgentFilter}
        setUrgentFilter={setUrgentFilter}
        customCategories={customCategories}
        addCategory={addCategory}
        toggleCategoryPopup={toggleAddCategoryPopup}
        isAddCategoryPopupOpen={isAddCategoryPopupOpen}
      />

      <div className="divider"></div>

      <TodoList
        todos={todos}
        filter={filter}
        search={search}
        sort={sort}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        urgentFilter={urgentFilter}
        setUrgentFilter={setUrgentFilter}
        removeTodo={removeTodo}
        completeTodo={completeTodo}
        customCategories={customCategories}
      />
      {isAddCategoryPopupOpen && (
        <AddCategoryPopup
          addCategory={addCategory}
          toggleCategoryPopup={toggleAddCategoryPopup}
          isAddCategoryPopupOpen={isAddCategoryPopupOpen}
        />
      )}
    </div>
  );
}

export default App;
