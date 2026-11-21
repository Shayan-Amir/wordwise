import { useState } from "react";
import StatusMessage from "./StatusMessage.jsx";
import "../styles/Flashcards.css";

function Flashcards({ savedWords }) {
  const [cardIndex, setCardIndex] = useState(0);
  const [showDefinition, setShowDefinition] = useState(false);

  if (savedWords.length === 0) {
    return (
      <section className="flashcards">
        <h2 className="section-heading">Practice</h2>
        <StatusMessage
          type="empty"
          title="No flashcards yet"
          text="Please save some words in the Dictionary first, then come back to practice them."
        />
      </section>
    );
  }

  const currentWord = savedWords[cardIndex];
  const firstMeaning = currentWord.meanings[0];

  function handleNext() {
    setCardIndex(cardIndex + 1);
    setShowDefinition(false);
  }

  function handlePrevious() {
    setCardIndex(cardIndex - 1);
    setShowDefinition(false);
  }

  function handleToggleDefinition() {
    setShowDefinition(!showDefinition);
  }

  return (
    <section className="flashcards">
      <h2 className="section-heading">Practice</h2>
      <p className="card-counter">
        Card {cardIndex + 1} of {savedWords.length}
      </p>

      <article className="flashcard">
        <h3 className="flashcard-word">{currentWord.word}</h3>
        {showDefinition && (
          <div className="flashcard-answer">
            <p className="flashcard-part">{firstMeaning.partOfSpeech}</p>
            <p>{firstMeaning.definitions[0].definition}</p>
          </div>
        )}
      </article>

      <div className="flashcard-controls">
        <button
          type="button"
          className="secondary-button"
          onClick={handlePrevious}
          disabled={cardIndex === 0}
        >
          Previous
        </button>
        <button
          type="button"
          className="primary-button"
          onClick={handleToggleDefinition}
        >
          {showDefinition ? "Hide definition" : "Show definition"}
        </button>
        <button
          type="button"
          className="secondary-button"
          onClick={handleNext}
          disabled={cardIndex === savedWords.length - 1}
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default Flashcards;
