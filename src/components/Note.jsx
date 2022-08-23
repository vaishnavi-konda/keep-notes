import React from 'react';
import axios from 'axios';

export default function Note({ noteItem, notes, setNotes }) {
  const deleteNote = async () => {
    await axios.delete(`https://keep-notes-backend.vercel.app/api/notes/${noteItem._id}`);
    await setNotes(notes.filter(eachNote => eachNote._id !== noteItem._id));
  };

  return (
    <>
      <div className='note'>
        <h1>{noteItem.title}</h1>
        <p>{noteItem.content}</p>
        <button onClick={deleteNote}>DELETE</button>
      </div>
    </>
  );
}
