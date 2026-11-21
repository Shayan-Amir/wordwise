# WordWise

WordWise is a vocabulary learning app for college students. Users can search for English words, read their definitions and related information, save words they want to learn, and practice them with flashcards.

## Problem Statement

College students regularly encounter unfamiliar vocabulary in academic readings, textbooks, and other educational materials. They may struggle to understand unfamiliar words, and repeatedly looking up words without having a way to save and review them makes vocabulary learning less organized.

WordWise provides a simple place where students can look up unfamiliar words, understand their meanings, save important vocabulary, and review it through flashcards.

## User Persona

- **Name:** Alex
- **Occupation:** College student
- **Goal:** Improve vocabulary and understand unfamiliar words encountered in academic readings.
- **Frustration:** Frequently encounters unfamiliar words while studying and sometimes forgets their meanings after looking them up.
- **Needs:** A simple application that provides definitions, examples, and an easy way to save and review unfamiliar vocabulary.

## API

Free Dictionary API: https://dictionaryapi.dev/

Example request: https://api.dictionaryapi.dev/api/v2/entries/en/extensive

## Features

- Search for a word (button or Enter key) and see its phonetic spelling, parts of speech, definitions, examples, synonyms and antonyms. Missing fields are hidden.
- Loading, error and "no definition found" states.
- Save a word with a bookmark button. Duplicates are prevented and saved words are marked as saved.
- My Words: view saved words, open the full details of one, or remove it. Saved words are kept in localStorage.
- Practice: flashcards that show the word first, reveal the definition on request, and move between cards with Previous and Next. The card number and total are shown.
- About: problem statement and user persona.

## Technologies

- React (functional components and hooks, JavaScript/JSX only)
- Vite
- Plain CSS
- Browser `fetch()` and localStorage

## Run Locally

```
npm install
npm run dev
```

Then open the address shown in the terminal (usually http://localhost:5173).

To create a production build:

```
npm run build
```

## Folder Structure

```
src/
  components/   one .jsx file per component
  styles/       global CSS (index.css, App.css) and one CSS file per component
  App.jsx       holds the current section and saved words state
  main.jsx      entry point
public/
  favicon.svg
index.html
package.json
```

## User Testing

_To be completed after two people have tested the application._

| Tester | What they tried | Problems or feedback | Changes made |
| ------ | --------------- | -------------------- | ------------ |
| 1      |                 |                      |              |
| 2      |                 |                      |              |
