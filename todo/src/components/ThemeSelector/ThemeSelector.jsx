import "./ThemeSelector.css";
import "../../index.css";
import ThemePopup from "./ThemePopup";
import { useState } from "react";

const ThemeSelector = () => {
  const [isThemePopupOpen, setIsThemePopupOpen] = useState(false);

  const handleThemeChange = (theme) => {
    document.body.setAttribute("data-theme", theme);
  };

  const toggleThemePopup = () => {
    setIsThemePopupOpen(!isThemePopupOpen);
  };

  isThemePopupOpen
    ? document.body.classList.add("no-scroll")
    : document.body.classList.remove("no-scroll");

  return (
    <div className="themes">
      <div className="themes__title btn">
        <button onClick={toggleThemePopup}>Tema</button>
      </div>
      {isThemePopupOpen && (
        <ThemePopup
          handleThemeChange={handleThemeChange}
          toggleThemePopup={toggleThemePopup}
          isThemePopupOpen={isThemePopupOpen}
        />
      )}
    </div>
  );
};

export default ThemeSelector;
