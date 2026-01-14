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
    <div className="add-task">
      <h2 className="add-task__title">Adicionar Nova Tarefa</h2>
      <form className="add-task__form" onSubmit={handleSubmit}>
        <input
          className="add-task__input"
          type="text"
          placeholder="Descrição da tarefa"
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        />
        <select
          className="add-task__select"
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
        <button type="submit" className="add-task__submit">
          Criar Tarefa
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
