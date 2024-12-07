const express = require('express')
const { Book } = require('./db_setup.js');
const app = express()
const port = 3000

app.use(express.json());

// Get all books
app.get('/api/books', async (req, res) => {
  const books = await Book.findAll();
  res.status(200).send(books);
})

// Get specific book
app.get('/api/books/:id', async (req, res) => {
  const book = await Book.findAll({where: {id: req.params.id}});
  res.status(200).send(book);
})

// Add book
app.post('/api/books', async (req, res) => {
  const newBook = await Book.create({
    title: req.body.title,
    author: req.body.author,
    year: req.body.year  
  });

  res.status(201).send({ id: newBook.id });
})

// Remove specific book
app.delete('/api/books/:id', async (req, res) => {
  const removeBook = await Book.findByPk(req.params.id);
  await removeBook.destroy();
  res.status(200).send({ id: req.params.id });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
