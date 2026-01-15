import { useState } from "react";
import "./AddPopup.css";
import "../index.css";

const AddPopup = ({ addTodo, toggleAddPopup }) => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");
  const [isUrgent, setIsUrgent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !category) return;

    addTodo(text, category, isUrgent);
    setText("");
    setCategory("");
    setIsUrgent(false);
    toggleAddPopup();
  };

  return (
    <>
      <div className="overlay" onClick={toggleAddPopup}></div>
      <div className="add-popup__content">
        <div className="add-popup__header">
          <h2 className="add-popup__title">Adicionar tarefa</h2>
          <div className="close-icon" onClick={toggleAddPopup}></div>
        </div>
        <div className="add-popup__body">
          <form className="add-popup__form" onSubmit={handleSubmit}>
            <input
              className="add-popup__input input"
              type="text"
              placeholder="Descrição da tarefa"
              onChange={(e) => {
                setText(e.target.value);
              }}
              value={text}
            />
            <select
              className="add-popup__select input"
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
            <div className="add-popup__urgent">
              <label
                htmlFor="add-task__urgent"
                className="add-task__urgent__label label"
              >
                <input
                  type="checkbox"
                  id="add-popup__urgent"
                  className="add-task__urgent__checkbox checkbox"
                  onChange={() => {
                    setIsUrgent(!isUrgent);
                  }}
                  checked={isUrgent}
                />
              </label>
              <p>Urgente</p>
            </div>
            <button type="submit" className="add-popup__submit">
              Criar Tarefa
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddPopup;
