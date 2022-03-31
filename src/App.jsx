import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import CreateArea from './components/CreateArea';
import Note from './components/Note';

const App = () => {
  const [notes, setNotes] = useState([]);
  const addNote = newNote => {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  };

  const deleteNote = id => {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          deleteNote={deleteNote}
        />
      ))}
      <Footer />
    </>
  );
};

export default App;
