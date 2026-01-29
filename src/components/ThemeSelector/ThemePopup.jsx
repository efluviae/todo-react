import "./ThemePopup.css";

const ThemePopup = ({ handleThemeChange, toggleThemePopup }) => {
  return (
    <>
      <div className="overlay" onClick={toggleThemePopup}></div>
      <div className="themes-popup popup">
        <div className="themes-popup__header">
          <h2 className="themes-popup__header__title">Selecione o Tema</h2>
          <div className="close-icon" onClick={toggleThemePopup}></div>
        </div>
        <div className="themes-popup__body">
          <div
            className="circle--purple circle"
            onClick={() => handleThemeChange("purple")}
          ></div>
          <div
            className="circle--pink circle"
            onClick={() => handleThemeChange("pink")}
          ></div>
          <div
            className="circle--green circle"
            onClick={() => handleThemeChange("green")}
          ></div>
          <div
            className="circle--dark circle"
            onClick={() => handleThemeChange("dark")}
          ></div>
        </div>
      </div>
    </>
  );
};

export default ThemePopup;
