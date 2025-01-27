// create web server
// create a route
// add a comment

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/comments', (req, res) => {
  res.send('This is a comment');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});