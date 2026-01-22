import { useEffect, useState } from "react";
import Search from "./components/Search.jsx";
import Filter from "./components/Filter/Filter.jsx";
import TodoList from "./components/TodoList.jsx";
import AddCategoryPopup from "./components/Filter/AddCategoryPopup.jsx";
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
  const [selectedDate, setSelectedDate] = useState("");

  const getTodayInBrasilia = () => {
    const date = new Date();
    const brasilia = new Date(
      date.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }),
    );
    const year = brasilia.getFullYear();
    const month = String(brasilia.getMonth() + 1).padStart(2, "0");
    const day = String(brasilia.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const minDate = getTodayInBrasilia();

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  /* set items to localStorage */
  useEffect(() => {
    setItem("CUSTOM_CATEGORIES", customCategories);
  }, [customCategories]);

  useEffect(() => {
    setItem("TODOS", todos);
  }, [todos]);

  const addTodo = (text, category, isUrgent, selectedDate) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 1000000),
        text,
        category,
        isCompleted: false,
        isUrgent,
        selectedDate,
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

  const editTodo = (id, newText, newCat, newUrgent, newDate) => {
    const editedTodos = todos.map((todo) => {
      if (id === todo.id) {
        return {
          ...todo,
          text: newText,
          category: newCat,
          isUrgent: newUrgent,
          selectedDate: newDate,
        };
      }
      return todo;
    });

    setTodos(editedTodos);
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
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        minDate={minDate}
        handleDateChange={handleDateChange}
      />

      <div className="divider"></div>

      <Filter
        filter={filter}
        todos={todos}
        setTodos={setTodos}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        urgentFilter={urgentFilter}
        setUrgentFilter={setUrgentFilter}
        customCategories={customCategories}
        setCustomCategories={setCustomCategories}
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
        editTodo={editTodo}
        minDate={minDate}
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
