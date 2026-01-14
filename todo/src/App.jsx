import { useState } from "react";
import TodoForm from "./components/TodoForm.jsx";
import Search from "./components/Search.jsx";
import Filter from "./components/Filter.jsx";
import TodoList from "./components/TodoList.jsx";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("Asc");

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 1000000),
        text,
        category,
        isCompleted: false,
      },
    ];

    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
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

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
      />
      <TodoList
        todos={todos}
        filter={filter}
        search={search}
        sort={sort}
        removeTodo={removeTodo}
        completeTodo={completeTodo}
      />
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
