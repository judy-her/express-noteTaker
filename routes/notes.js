const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
//GET route for retrieving notes
notes.get('/', (req, res) => {
  readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
});
