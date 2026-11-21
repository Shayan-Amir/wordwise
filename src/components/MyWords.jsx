import { useState } from "react";
import SavedWordCard from "./SavedWordCard.jsx";
import StatusMessage from "./StatusMessage.jsx";
import WordDetails from "./WordDetails.jsx";
import "../styles/MyWords.css";

function MyWords({ savedWords, onSaveWord, onRemoveWord }) {
  const [selectedWord, setSelectedWord] = useState("");

  const selectedEntry = savedWords.find(
    (savedWord) => savedWord.word === selectedWord
  );

  return (
    <section className="my-words">
      <h2 className="section-heading">My Words</h2>

      {savedWords.length === 0 && (
        <StatusMessage
          type="empty"
          title="No saved words yet"
          text="Search for a word in the Dictionary and press Save word to add it here."
        />
      )}

      <ul className="saved-list">
        {savedWords.map((savedWord) => (
          <SavedWordCard
            key={savedWord.word}
            wordEntry={savedWord}
            isSelected={savedWord.word === selectedWord}
            onSelect={setSelectedWord}
            onRemove={onRemoveWord}
          />
        ))}
      </ul>

      {selectedEntry && (
        <WordDetails
          wordEntry={selectedEntry}
          isSaved={true}
          onSaveWord={onSaveWord}
          onRemoveWord={onRemoveWord}
        />
      )}
    </section>
  );
}

export default MyWords;
