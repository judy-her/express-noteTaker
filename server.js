const express = require('express');
const path = require('path');
const { clog } = require('./middleware/clog.js');
const api = require('./routes/notes.js');
const app = express();

const PORT = process.env.port || 3001;

//import middlware clog
app.use(clog);

//Middlware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
app.use(express.static('public'));

//GET Route for homepage
app.get('/', (res, req) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => {
  console.log(`🖨️ App listening at http://localhost:${PORT}`);
});
