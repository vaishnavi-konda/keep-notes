import React, { useState } from 'react';
import axios from 'axios';

export default function CreateArea({ notes, setNotes }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const addNote = async () => {
    const newNote = {
      title,
      content,
    };
    const res = await axios.post(`http://localhost:4000/api/notes`, newNote);
    await setNotes(() => {
      setTitle('');
      setContent('');
      return [...notes, res.data];
    });
  };

  return (
    <>
      <form>
        <input
          name='title'
          placeholder='Title'
          value={title}
          onChange={event => {
            setTitle(event.target.value);
          }}
        />
        <textarea
          name='content'
          rows='4'
          value={content}
          placeholder='Type a note...'
          onChange={event => {
            setContent(event.target.value);
          }}
        ></textarea>
        <button onClick={addNote}>Add</button>
      </form>
    </>
  );
}
