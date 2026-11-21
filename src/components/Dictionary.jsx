import { useState, useEffect } from "react";
import SearchBar from "./SearchBar.jsx";
import StatusMessage from "./StatusMessage.jsx";
import WordDetails from "./WordDetails.jsx";
import "../styles/Dictionary.css";

function Dictionary({ savedWords, onSaveWord, onRemoveWord }) {
  const [searchText, setSearchText] = useState("");
  const [searchedWord, setSearchedWord] = useState("");
  const [wordEntry, setWordEntry] = useState(null);
  const [status, setStatus] = useState("empty");

  async function fetchWord(word) {
    setStatus("loading");
    setWordEntry(null);

    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );

      if (response.status === 404) {
        setStatus("notfound");
      } else if (response.ok) {
        const data = await response.json();
        setWordEntry(data[0]);
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }

    setSearchedWord("");
  }

  useEffect(() => {
    if (searchedWord !== "") {
      fetchWord(searchedWord);
    }
  }, [searchedWord]);

  function handleSearch() {
    const word = searchText.trim().toLowerCase();
    if (word !== "") {
      setSearchedWord(word);
    }
  }

  const isSaved = wordEntry
    ? savedWords.some((savedWord) => savedWord.word === wordEntry.word)
    : false;

  return (
    <section className="dictionary">
      <h2 className="section-heading">Dictionary</h2>
      <SearchBar
        searchText={searchText}
        onSearchTextChange={setSearchText}
        onSearch={handleSearch}
      />

      {status === "empty" && (
        <StatusMessage
          type="empty"
          title="Search for a word"
          text="Type an English word above to see its definitions, examples, synonyms and more."
        />
      )}
      {status === "loading" && (
        <StatusMessage type="loading" title="Loading..." text="" />
      )}
      {status === "notfound" && (
        <StatusMessage
          type="empty"
          title="No definition found."
          text="Please check the spelling and try again."
        />
      )}
      {status === "error" && (
        <StatusMessage
          type="error"
          title="Something went wrong"
          text="The word could not be retrieved. Please check your internet connection. The dictionary service may also be busy, so try searching again."
        />
      )}
      {status === "success" && (
        <WordDetails
          wordEntry={wordEntry}
          isSaved={isSaved}
          onSaveWord={onSaveWord}
          onRemoveWord={onRemoveWord}
        />
      )}
    </section>
  );
}

export default Dictionary;
