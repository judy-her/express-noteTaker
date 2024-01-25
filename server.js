const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog.js');
const app = express();
const api = require('./routes/notes.js');
const noteData = require('./db/db.json');
const PORT = process.env.port || 3001;

//middleware clog
app.use(clog);

//body parse to pass html page
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

//static folder
app.use(express.static(path.join(__dirname, 'public')));

//api for db.json(notes)
app.get('/api/notes', (req, res) => {
  res.json(noteData);
});

app.post('/api/notes', (req, res) => {
  const newData = req.body;
  res.json({
    message: 'Note added Sucessfully!',
    data: newData,
  });
});

app.listen(PORT, () => {
  console.log(`🖨️ App listening at http://localhost:${PORT}`);
});
