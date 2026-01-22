import { useState } from "react";
import "./Filter.css";
import RemoveCategoryPopup from "./RemoveCategoryPopup";

const Filter = ({
  todos,
  setTodos,
  filter,
  setFilter,
  setSort,
  setCategoryFilter,
  categoryFilter,
  urgentFilter,
  setUrgentFilter,
  customCategories,
  setCustomCategories,
  toggleCategoryPopup,
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isRemovePopupOpen, setIsRemovePopupOpen] = useState(false);

  const toggleFilterOpen = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const toggleRemovePopup = () => {
    setIsRemovePopupOpen(!isRemovePopupOpen);
  };

  isRemovePopupOpen
    ? document.body.classList.add("no-scroll")
    : document.body.classList.remove("no-scroll");

  return (
    <div className="filter">
      <div className="filter__header" onClick={toggleFilterOpen}>
        <div className={`chevron-${isFilterOpen ? "down" : "right"}`}></div>
        <h2 className="filter__title">Filtrar</h2>
      </div>
      <div className="filter__content">
        {isFilterOpen && (
          <>
            <div className="filter__status">
              <h3 className="filter__status__label">Status:</h3>
              <select
                className="filter__status__select"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">Todas</option>
                <option value="completed">Completas</option>
                <option value="incomplete">Incompletas</option>
              </select>
            </div>
            <div className="filter__category">
              <h3>Categoria:</h3>
              <div className="filter__category__content">
                <select
                  className="filter__category__select"
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                >
                  <option value="all">Todas</option>
                  <option value="Trabalho">Trabalho</option>
                  <option value="Estudos">Estudos</option>
                  <option value="Pessoal">Pessoal</option>
                  {customCategories.map((category) => (
                    <option key={category.id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
                <div className="filter__manage-category">
                  <button
                    className="filter__manage-category__add-btn btn"
                    onClick={toggleCategoryPopup}
                  >
                    Adicionar
                  </button>
                  <button
                    className="filter__manage-category__remove-btn btn"
                    onClick={toggleRemovePopup}
                  >
                    Remover
                  </button>
                  {isRemovePopupOpen && (
                    <RemoveCategoryPopup
                      todos={todos}
                      setTodos={setTodos}
                      customCategories={customCategories}
                      setCustomCategories={setCustomCategories}
                      toggleRemovePopup={toggleRemovePopup}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="filter__urgent">
              <h3>Urgente:</h3>
              <input
                className=" filter__urgent__checkbox checkbox"
                type="checkbox"
                onChange={() => setUrgentFilter(!urgentFilter)}
                checked={urgentFilter}
              />
            </div>
            <div className="filter__sort">
              <h3>Ordenar por prazo:</h3>
              <div className="filter__sort__buttons">
                <button
                  className="filter__sort__btn btn"
                  onClick={() => setSort("Asc")}
                >
                  Perto
                </button>
                <button
                  className="filter__sort__btn btn"
                  onClick={() => setSort("Desc")}
                >
                  Longe
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Filter;
