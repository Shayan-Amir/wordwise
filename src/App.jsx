import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Navigation from "./components/Navigation.jsx";
import Dictionary from "./components/Dictionary.jsx";
import MyWords from "./components/MyWords.jsx";
import Flashcards from "./components/Flashcards.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
import "./styles/App.css";

function App() {
  const storedWords = localStorage.getItem("wordwiseWords"); // local storage saves everything as a string
  const [currentSection, setCurrentSection] = useState("dictionary");
  const [savedWords, setSavedWords] = useState(
    storedWords ? JSON.parse(storedWords) : [] //JSON.parse(storedWords) turns the string back into an array of word objects
  );

  useEffect(() => {
    localStorage.setItem("wordwiseWords", JSON.stringify(savedWords)); // JSON.stringify(savedWords) turns the array of word objects into a string
  }, [savedWords]);

  function handleSaveWord(wordEntry) { // handleSaveWord -> passed as prop onSaveWord to Dictionary -> passed as prop onSaveWord to
                                      //  WordDetails -> called in handleSave when the Save word button is clicked
    
    const alreadySaved = savedWords.some(
      (savedWord) => savedWord.word === wordEntry.word // savedWord = each word already in savedWords, wordEntry = the word being saved; true if their .word matches
    );
    if (!alreadySaved) {
      setSavedWords([...savedWords, wordEntry]); // ... is a spread operator. it copies every item from the old list into the new array
    }
  }

  function handleRemoveWord(word) { //handleRemoveWord -> passed as prop onRemoveWord to Dictionary -> passed as prop 
                                    //onRemoveWord to WordDetails -> called in handleRemove when the Saved button is clicked

    const remainingWords = savedWords.filter(
      (savedWord) => savedWord.word !== word
    );
    setSavedWords(remainingWords);
  }

  return (
    <div className="app">
      <Header />
      <Navigation
        currentSection={currentSection}
        onChangeSection={setCurrentSection}
        savedCount={savedWords.length}
      />
      <main className="app-main">
        {currentSection === "dictionary" && (
          <Dictionary
            savedWords={savedWords}
            onSaveWord={handleSaveWord}
            onRemoveWord={handleRemoveWord}
          />
        )}
        {currentSection === "mywords" && (
          <MyWords
            savedWords={savedWords}
            onSaveWord={handleSaveWord}
            onRemoveWord={handleRemoveWord}
          />
        )}
        {currentSection === "practice" && <Flashcards savedWords={savedWords} />}
        {currentSection === "about" && <About />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
