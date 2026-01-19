import "./AddCategoryPopup.css";
import { useState } from "react";
import "../index.css";

const AVAILABLE_COLORS = [
  { name: "Roxo", value: "purple" },
  { name: "Verde", value: "green" },
  { name: "Amarelo", value: "yellow" },
  { name: "Azul", value: "blue" },
  { name: "Laranja", value: "orange" },
  { name: "Rosa", value: "pink" },
];

const AddCategoryPopup = ({
  addCategory,
  toggleCategoryPopup,
  isAddCategoryPopupOpen,
}) => {
  const [categoryName, setCategoryName] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!categoryName || !selectedColor) return;

    addCategory({
      id: Math.floor(Math.random() * 1000000),
      name: categoryName,
      color: selectedColor,
    });

    setCategoryName("");
    setSelectedColor("");
    toggleCategoryPopup();
  };

  isAddCategoryPopupOpen
    ? document.body.classList.add("no-scroll")
    : document.body.classList.remove("no-scroll");

  return (
    <>
      <div className="overlay" onClick={toggleCategoryPopup}></div>
      <div className="add-category-popup popup">
        <div className="add-category-popup__header">
          <h2 className="add-category-popup__title">Adicionar Categoria</h2>
          <div className="close-icon" onClick={toggleCategoryPopup}></div>
        </div>
        <div className="add-category-popup__body">
          <form className="add-category-popup__form" onSubmit={handleSubmit}>
            <input
              className="add-category-popup__input input"
              type="text"
              placeholder="Nome da categoria..."
              onChange={(e) => setCategoryName(e.target.value)}
              value={categoryName}
            />

            <div className="add-category-popup__colors">
              <label className="add-category-popup__label">Cor:</label>
              <div className="add-category-popup__color-options">
                {AVAILABLE_COLORS.map((color) => (
                  <label key={color.value} className="color-option">
                    <input
                      type="radio"
                      name="color"
                      value={color.value}
                      onChange={(e) => setSelectedColor(e.target.value)}
                      checked={selectedColor === color.value}
                      className="radial-selector"
                    />
                    <span
                      className="color-option__display"
                      data-color={color.value}
                    ></span>
                    <span className="color-option__label">{color.name}</span>
                  </label>
                ))}
              </div>
            </div>

            <button type="submit" className="add-category-popup__submit">
              Criar Categoria
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCategoryPopup;
