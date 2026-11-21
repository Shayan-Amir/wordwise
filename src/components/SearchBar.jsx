import "../styles/SearchBar.css";

function SearchBar({ searchText, onSearchTextChange, onSearch }) {
  function handleSubmit(event) {
    event.preventDefault();
    onSearch();
  }

  function handleChange(event) {
    onSearchTextChange(event.target.value);
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <label htmlFor="word-search" className="search-label">
        Search for an English word
      </label>
      <div className="search-row">
        <input
          id="word-search"
          type="text"
          className="search-input"
          placeholder="For example: ubiquitous"
          value={searchText}
          onChange={handleChange}
        />
        <button type="submit" className="primary-button">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
