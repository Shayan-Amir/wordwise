import "../styles/SavedWordCard.css";

function SavedWordCard({ wordEntry, isSelected, onSelect, onRemove }) {
  const firstMeaning = wordEntry.meanings[0];

  function handleSelect() {
    onSelect(wordEntry.word);
  }

  function handleRemove() {
    onRemove(wordEntry.word);
  }

  return (
    <li className={`saved-card ${isSelected ? "selected" : ""}`}>
      <article>
        <h3 className="saved-word">{wordEntry.word}</h3>
        <p className="saved-part">{firstMeaning.partOfSpeech}</p>
        <p className="saved-definition">{firstMeaning.definitions[0].definition}</p>
        <div className="saved-actions">
          <button
            type="button"
            className="secondary-button"
            onClick={handleSelect}
          >
            View details
          </button>
          <button
            type="button"
            className="danger-button"
            onClick={handleRemove}
          >
            Remove
          </button>
        </div>
      </article>
    </li>
  );
}

export default SavedWordCard;
