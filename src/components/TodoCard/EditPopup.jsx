import { useState } from "react";
import DatePickerMinToday from "../DatePickerMinToday";
import "./EditPopup.css";

const EditPopup = ({ todo, editTodo, customCategories, minDate }) => {
  const [edit, setEdit] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const [newCat, setNewCat] = useState(todo.category);
  const [newUrgent, setNewUrgent] = useState(todo.isUrgent);
  const [newDate, setNewDate] = useState(todo.selectedDate);

  const toggleEdit = () => {
    setEdit(!edit);
    if (edit) {
      setNewText(todo.text);
      setNewCat(todo.category);
      setNewUrgent(todo.isUrgent);
      setNewDate(todo.selectedDate);
    }
  };

  const handleDateChange = (e) => {
    setNewDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    editTodo(todo.id, newText, newCat, newUrgent, newDate);

    toggleEdit();
  };

  return (
    <>
      <div className="edit">
        <img
          onClick={toggleEdit}
          className="edit__pencil-icon icon"
          src="./src/assets/pencil.svg"
          alt="Edit Todo"
        />
      </div>
      {edit && (
        <>
          <div className="overlay" onClick={toggleEdit}></div>
          <div className="edit__popup popup">
            <div className="edit-popup__header popup__header">
              <h2 className="edit-popup__title">Editar tarefa</h2>
              <div className="close-icon" onClick={toggleEdit}></div>
            </div>
            <div className="edit-popup__body">
              <form
                className="edit-popup__form popup__form"
                onSubmit={handleSubmit}
              >
                <input
                  className="edit-popup__input input"
                  type="text"
                  placeholder="Descrição da tarefa..."
                  onChange={(e) => {
                    setNewText(e.target.value);
                  }}
                  value={newText}
                />
                <select
                  className="edit-popup__select input"
                  onChange={(e) => {
                    setNewCat(e.target.value);
                  }}
                  value={newCat}
                >
                  <option value="">Selecione uma categoria...</option>
                  <option value="Nenhuma">Sem Categoria</option>
                  <option value="Trabalho">Trabalho</option>
                  <option value="Pessoal">Pessoal</option>
                  <option value="Estudos">Estudos</option>
                  {customCategories.map((category) => (
                    <option key={category.id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
                <DatePickerMinToday
                  selectedDate={newDate}
                  minDate={minDate}
                  handleDateChange={handleDateChange}
                />
                <div className="edit-popup__urgent popup__urgent">
                  <label
                    htmlFor="edit-popup__urgent"
                    className="edit-popup__urgent__label popup__urgent__label label"
                  >
                    <input
                      type="checkbox"
                      id="edit-popup__urgent"
                      className="edit-popup__urgent__checkbox checkbox"
                      onChange={() => {
                        setNewUrgent(!newUrgent);
                      }}
                      checked={newUrgent}
                    />
                  </label>
                  <p>Urgente</p>
                </div>
                <button
                  type="submit"
                  className="edit-popup__submit popup__submit"
                >
                  Confirmar
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default EditPopup;
