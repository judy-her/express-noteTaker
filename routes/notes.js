const express = require('express');
const notes = express.Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils.js');
// Helper function for generating unique ids
const { v4: uuidv4 } = require('uuid');

//GET route for retrieving notes
notes.get('/', (req, res) => {
  //read from file and sent JSON content
  readFromFile('./db/db.json')
    .then((data) => {
      console.log(typeof data);
      console.log(data);
      const notesData = JSON.parse(data);
      res.json(notesData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Internal Server Error');
    });
});

//POST route for a new note
notes.post('/', (req, res) => {
  const { title, text } = req.body;

  if (title && text) {
    const newNote = {
      title,
      text,
      note_id: uuidv4(),
    };

    //append new note to file
    readAndAppend(newNote, './db/db.json')
      .then(() => {
        res.json('Note added successfully!');
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send('Internal Server Error');
      });
  } else {
    res.status(400).json('Error, note not added. Title and text required.');
  }
});

module.exports = notes;
