import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [notes, setNotes] = useState([]);

  function fetchNotes() {
    axios.get("http://localhost:3000/api/notes").then((res) => {
      setNotes(res.data.notes);
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    const { title, description } = e.target.elements;
    console.log(title.value, description.value);

    const newNote = { title: title.value, description: description.value };

    axios.post("http://localhost:3000/api/notes", newNote).then((res) => {
      console.log(res.data);
      fetchNotes();
    });
  }

  function handleDeleteNote(noteId) {
    axios.delete("http://localhost:3000/api/notes/" + noteId).then((res) => {
      console.log(res.data);
      fetchNotes();
    });
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>
      <form className="create-note-form" onSubmit={submitHandler}>
        <input className="title" name="title" type="text" placeholder="title" />
        <input
          className="description"
          name="description"
          type="text"
          placeholder="description"
        />
        <button className="submit" type="submit">
          Create
        </button>
      </form>

      <div className="notes">
        {notes.map((note) => {
          return (
            <div className="note" key={note._id}>
              <h2>{note.title}</h2>
              <p>{note.description}</p>
              <button
                onClick={() => {
                  handleDeleteNote(note._id);
                }}
              >
                delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
