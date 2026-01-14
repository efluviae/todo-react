import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !category) return;

    addTodo(text, category);
    setText("");
    setCategory("");
  };

  return (
    <div className="todo-form">
      <h2>Adicionar Nova Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Descrição da tarefa"
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        />
        <select
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          value={category}
        >
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type="submit">Criar Tarefa</button>
      </form>
    </div>
  );
};

export default TodoForm;
