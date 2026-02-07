const express = require("express");

const app = express();

app.use(express.json());

const notes = [];

app.get("/", (req, res) => {
  res.status(200).json({
    message: "its a notes app",
  });
});

app.get("/notes", (req, res) => {
  res.status(200).json({
    notes: notes,
  });
});

app.post("/notes", (req, res) => {
  notes.push(req.body);
  res.status(201).json({
    message: "note created",
  });
});

app.delete("/notes/:index", (req, res) => {
  delete notes[req.params.index];

  res.status(204).json({
    message: "note deleted",
  });
});

app.patch("/notes/:index", (req, res) => {
  notes[req.params.index].description = req.body.description;
  res.status(200).json({
    message: "note updated",
  });
});

module.exports = app;
