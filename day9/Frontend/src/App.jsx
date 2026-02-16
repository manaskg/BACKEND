import React from "react";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [notes, setNotes] = useState([
    // {
    //   title: "title 1",
    //   description: "description 1",
    // },
    // {
    //   title: "title 2",
    //   description: "description 2",
    // },
    // {
    //   title: "title 3",
    //   description: "description 3",
    // },
    // {
    //   title: "title 4",
    //   description: "description 4",
    // },
  ]);

  axios.get("http://localhost:3000/api/notes").then((res) => {
    setNotes(res.data.notes);
  });

  return (
    <div>
      <div className="notes">
        {notes.map((note) => {
          return (
            <div className="note">
              <h2>{note.title}</h2>
              <p>{note.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
