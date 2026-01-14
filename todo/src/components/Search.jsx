const Search = ({ search, setSearch }) => {
  return (
    <div className="search">
      <h2 className="search__title">Pesquisar Tarefas</h2>
      <input
        className="search__input"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Digite para pesquisar..."
      />
    </div>
  );
};

export default Search;
