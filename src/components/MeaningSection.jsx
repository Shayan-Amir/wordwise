import "../styles/MeaningSection.css";

function MeaningSection({ meaning }) {
  return (
    <article className="meaning-section">
      <h3 className="part-of-speech">{meaning.partOfSpeech}</h3>
      <ol className="definition-list">
        {meaning.definitions.map((item, index) => (
          <li key={index} className="definition-item">
            <p>{item.definition}</p>
            {item.example && <p className="example">"{item.example}"</p>}
          </li>
        ))}
      </ol>
      {meaning.synonyms.length > 0 && (
        <p>
          <strong>Synonyms:</strong> {meaning.synonyms.join(", ")}
        </p>
      )}
      {meaning.antonyms.length > 0 && (
        <p>
          <strong>Antonyms:</strong> {meaning.antonyms.join(", ")}
        </p>
      )}
    </article>
  );
}

export default MeaningSection;
