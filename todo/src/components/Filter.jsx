const Filter = ({ filter, setFilter, setSort }) => {
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
