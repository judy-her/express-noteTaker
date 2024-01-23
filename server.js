const express = require('express');
const router = express.Router();
const path = require('path');
const { clog } = require('./middleware/clog.js');
const fs = require('fs');
const app = express();
const PORT = process.env.port || 3001;

//middleware clog
app.use(clog);

//body parse to pass html page
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//GET Route for homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});
//GET Route for notes
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'));
});
//app post to handle request
app.post('/notes', (req, res) => {
  console.log(req.body);
  res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.listen(PORT, () => {
  console.log(`🖨️ App listening at http://localhost:${PORT}`);
});
