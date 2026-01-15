import { useState } from "react";
import AddPopup from "./AddPopup";
import "./Search.css";

const Search = ({ search, setSearch, addTodo }) => {
  const [addPopup, setAddPopup] = useState(false);

  const toggleAddPopup = () => {
    setAddPopup(!addPopup);
  };

  if (addPopup) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }

  return (
    <>
      <div className="search">
        <div className="search__content">
          <input
            className="search__input input"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Digite para pesquisar..."
          />
          <div className="add-icon" onClick={toggleAddPopup}></div>
        </div>
      </div>
      {addPopup && (
        <AddPopup toggleAddPopup={toggleAddPopup} addTodo={addTodo} />
      )}
    </>
  );
};

export default Search;
