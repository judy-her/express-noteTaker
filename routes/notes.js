const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require('../helpers/fsUtils.js');

//GET route for retrieving notes
notes.get('/', (req, res) => {
  //read from file and sent JSON content
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

//EXTRA GET route for a specific note
notes.get('/:note_id');
//EXTRA DELETE route for a specific note

//POST route for a new note
notes.post('/', (req, res) => {
  console.log(req.body, 'req.body');

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      note_id: uuidv4(),
    };

    //append new note to file
    readAndAppend(newNote, './db/db.json');
    console.log(newNote);
    res.json(`Note added successfully`);
  } else {
    res.error('Error in adding note');
  }
});

module.exports = notes;
