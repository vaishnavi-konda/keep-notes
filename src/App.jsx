import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import CreateArea from './components/CreateArea';
import Note from './components/Note';
import axios from 'axios';

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const allNotes = await axios.get(`http://localhost:4000/api/`);
      await setNotes(allNotes.data);
    };
    fetchNotes();
  }, []);

  return (
    <>
      <Header />
      <CreateArea notes={notes} setNotes={setNotes} />
      {notes.map((noteItem, index) => (
        <Note
          key={index}
          noteItem={noteItem}
          notes={notes}
          setNotes={setNotes}
        />
      ))}
      <Footer />
    </>
  );
};

export default App;
