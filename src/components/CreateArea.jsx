import React, { useState } from 'react';

export default function CreateArea(props) {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.addNote(note);

    // Clear the inputs after adding notes
    setNote({
      title: '',
      content: '',
    });
    event.preventDefault();
  }

  return (
    <>
      <form>
        <input
          name='title'
          placeholder='Title'
          value={note.title}
          onChange={handleChange}
        />
        <textarea
          name='content'
          rows='4'
          value={note.content}
          placeholder='Type a note...'
          onChange={handleChange}
        ></textarea>
        <button onClick={submitNote}>Add</button>
      </form>
    </>
  );
}
