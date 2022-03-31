import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import CreateArea from './components/CreateArea';
import Note from './components/Note';
// import notes from './notes.js';

const App = () => {
  const [notes, setNotes] = useState([]);
  const addNote = newNote => {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  };
  return (
    <>
      <Header />
      <CreateArea addNote={addNote} />
      <Note title='title' content='hii' />
      {notes.map(noteItem => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
      <Footer />
    </>
  );
};

export default App;
