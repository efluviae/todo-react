import { useState } from "react";
import "./RemoveCategoryPopup.css";
import "../../index.css";

const RemoveCategoryPopup = ({
  customCategories,
  setCustomCategories,
  toggleRemovePopup,
  todos,
  setTodos,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const removeCategory = (categoryName) => {
    const updatedCategories = customCategories.filter(
      (category) => category.name !== categoryName,
    );

    const updatedTodos = todos.map((todo) =>
      todo.category === categoryName ? { ...todo, category: "Nenhuma" } : todo,
    );

    setCustomCategories(updatedCategories);
    setTodos(updatedTodos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedCategory) return;

    removeCategory(selectedCategory);

    setSelectedCategory("");
    toggleRemovePopup();
  };

  return (
    <>
      <div className="overlay" onClick={toggleRemovePopup}></div>
      <div className="remove-category-popup popup">
        <div className="remove-category-popup__header">
          <h2 className="remove-category-popup__title">Remover Categoria</h2>
          <div className="close-icon" onClick={toggleRemovePopup}></div>
        </div>
        <form className="remove-category-popup__form" onSubmit={handleSubmit}>
          <select
            className="remove-category-popup__select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Selecione uma categoria...</option>
            {customCategories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          <button type="submit" className="remove-category-popup__submit">
            Remover Categoria
          </button>
        </form>
      </div>
    </>
  );
};

export default RemoveCategoryPopup;
