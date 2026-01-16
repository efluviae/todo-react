import { useState } from "react";
import "./Filter.css";

const Filter = ({
  filter,
  setFilter,
  setSort,
  setCategoryFilter,
  categoryFilter,
  urgentFilter,
  setUrgentFilter,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="filter">
      <div className="filter__header">
        <div
          className={`chevron-${isOpen ? "down" : "right"}`}
          onClick={toggleOpen}
        ></div>
        <h2 className="filter__title" onClick={toggleOpen}>
          Filtrar
        </h2>
      </div>
      <div className="filter__content">
        {isOpen && (
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
              <select
                className="filter__category__select"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="all">Todas</option>
                <option value="trabalho">Trabalho</option>
                <option value="estudos">Estudos</option>
                <option value="pessoal">Pessoal</option>
              </select>
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
              <h3 className="filter__sort__label">Ordenar:</h3>
              <button
                className="filter__sort__btn btn"
                onClick={() => setSort("Asc")}
              >
                Asc
              </button>
              <button
                className="filter__sort__btn btn"
                onClick={() => setSort("Desc")}
              >
                Desc
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Filter;
