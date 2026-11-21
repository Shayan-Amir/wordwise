import MeaningSection from "./MeaningSection.jsx";
import "../styles/WordDetails.css";

function WordDetails({ wordEntry, isSaved, onSaveWord, onRemoveWord }) {
  const phoneticWithText = wordEntry.phonetics.find((item) => item.text);

  let phonetic = wordEntry.phonetic;
  if (!phonetic && phoneticWithText) {
    phonetic = phoneticWithText.text;
  }

  function handleSave() {
    onSaveWord(wordEntry);
  }

  function handleRemove() {
    onRemoveWord(wordEntry.word);
  }

  return (
    <section className="word-details">
      <header className="word-header">
        <div>
          <h2 className="word-title">{wordEntry.word}</h2>
          {phonetic && <p className="phonetic">{phonetic}</p>}
        </div>
        {isSaved ? (
          <button
            type="button"
            className="saved-button"
            onClick={handleRemove}
          >
            ★ Saved (click to remove)
          </button>
        ) : (
          <button
            type="button"
            className="primary-button"
            onClick={handleSave}
          >
            ☆ Save word
          </button>
        )}
      </header>

      {wordEntry.meanings.map((meaning, index) => (
        <MeaningSection key={index} meaning={meaning} />
      ))}
    </section>
  );
}

export default WordDetails;
