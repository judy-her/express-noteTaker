const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
// Helper function for generating unique ids
const { v4: uuidv4 } = require('uuid');

//GET route for retrieving notes
notes.get('/', (req, res) => {
  readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
});

//POST route for a new note
