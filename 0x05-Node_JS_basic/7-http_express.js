const express = require('express');

const args = process.argv.slice(2);
const countStudents = require('./3-read_file_async');

const app = express();
const DATABASE = args[0];
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const msg = 'This is the list of our students\n';
  try {
    const students = await countStudents(DATABASE);
    res.send(`${msg}${students}`);
  } catch (error) {
    res.send(`${msg}${error.message}`);
  }
});

app.listen(port, () => {
  // console.log(`app listening at http://localhost:${port}`);
});

module.exports = app;
