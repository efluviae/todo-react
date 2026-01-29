import { useState } from "react";
import AddPopup from "./AddPopup";
import "./Search.css";

const Search = ({
  search,
  setSearch,
  addTodo,
  customCategories,
  selectedDate,
  setSelectedDate,
  minDate,
  handleDateChange,
}) => {
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
        <AddPopup
          toggleAddPopup={toggleAddPopup}
          addTodo={addTodo}
          customCategories={customCategories}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          minDate={minDate}
          handleDateChange={handleDateChange}
        />
      )}
    </>
  );
};

export default Search;
