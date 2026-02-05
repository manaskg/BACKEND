const express = require("express");

const app = express();

app.use(express.json());

const notes = [];

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/notes", (req, res) => {
  // res.send("these are your notes");
  res.send(notes);
  console.log(notes);
});

app.post("/notes", (req, res) => {
  const newNote = req.body;
  notes.push(newNote);
  res.send("notes created");
});

app.delete("/notes/:index", (req, res) => {
  delete notes[req.params.index];
  res.send(`note deleted at param ${req.params.index}`);
});

app.patch('/notes/:index', (req,res) => {
  notes[req.params.index].description = req.body.description
  res.send('description updated')
})

module.exports = app;
