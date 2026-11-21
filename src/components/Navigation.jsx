import "../styles/Navigation.css";

function Navigation({ currentSection, onChangeSection, savedCount }) {
  function showDictionary() {
    onChangeSection("dictionary");
  }

  function showMyWords() {
    onChangeSection("mywords");
  }

  function showPractice() {
    onChangeSection("practice");
  }

  function showAbout() {
    onChangeSection("about");
  }

  return (
    <nav className="main-nav" aria-label="Main navigation">
      <button
        type="button"
        className={`nav-button ${currentSection === "dictionary" ? "active" : ""}`}
        onClick={showDictionary}
      >
        Dictionary
      </button>
      <button
        type="button"
        className={`nav-button ${currentSection === "mywords" ? "active" : ""}`}
        onClick={showMyWords}
      >
        My Words ({savedCount})
      </button>
      <button
        type="button"
        className={`nav-button ${currentSection === "practice" ? "active" : ""}`}
        onClick={showPractice}
      >
        Practice
      </button>
      <button
        type="button"
        className={`nav-button ${currentSection === "about" ? "active" : ""}`}
        onClick={showAbout}
      >
        About
      </button>
    </nav>
  );
}

export default Navigation;
