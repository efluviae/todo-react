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
  return (
    <div className="filter">
      <h2 className="filter__title">Filtrar:</h2>
      <div className="filter__content">
        <div className="filter__status">
          <p className="filter__status__label">Status:</p>
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
          <p>Categoria</p>
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
          <p>Urgente</p>
          <input
            className=" filter__urgent__checkbox checkbox"
            type="checkbox"
            onChange={() => setUrgentFilter(!urgentFilter)}
            checked={urgentFilter}
          />
        </div>
        <div className="filter__sort">
          <p className="filter__sort__label">Ordem alfabética</p>
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
      </div>
    </div>
  );
};

export default Filter;
