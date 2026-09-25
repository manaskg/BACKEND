const mongoose = require("mongoose");

const notesSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
    },
    body: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const notesModel = mongoose.model("notes", notesSchema);

module.exports = notesModel;
