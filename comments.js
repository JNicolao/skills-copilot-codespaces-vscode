// create web server
const express = require('express');
const app = express();
const port = 3000;

// import 'comments' module
const comments = require('./comments');

// GET /comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// start server
app.listen(port, () => {
  console.log(`Server started (http://localhost:${port}/)`);
});

// GET /comments/1
app.get('/comments/:id', (req, res) => {
  const id = req.params.id;
  const comment = comments.find((comment) => comment.id === Number(id));
  res.json(comment);
});

// GET /comments?postId=1
app.get('/comments', (req, res) => {
  const postId = req.query.postId;
  const postComments = comments.filter((comment) => comment.postId === Number(postId));
  res.json(postComments);
});

// POST /comments
app.use(express.json());
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.status(201).json(comment);
});

// PUT /comments/1
app.put('/comments/:id', (req, res) => {
  const id = req.params.id;
  const comment = req.body;
  const index = comments.findIndex((comment) => comment.id === Number(id));
  comments[index] = {
    id: comments[index].id,
    postId: comment.postId,
    name: comment.name,
    email: comment.email,
    body: comment.body,
  };
  res.json(comments[index]);
});

// DELETE /comments/1
app.delete('/comments/:id', (req, res) => {
  const id = req.params.id;
  const index = comments.findIndex((comment) => comment.id === Number(id));
  comments.splice(index, 1);
  res.status(204).send();
});