const express = require('express')
const { Book } = require('./db_setup.js');
const jwt = require('jsonwebtoken');
const app = express()
const port = 3000
const NOT_SO_SECRET_SECRET_KEY="notsosecret";

app.use(express.json());

// Verify token 
function verifyToken(req, res, next) {
  token = req.headers['authorization'];

  if (!token) {
    return res.status(401).send('Brak tokena');
  }

  try {
    if (!req.headers['authorization'].startsWith("Bearer ")) {
      throw new Error('Nieprawidłowy token');
    }
    jwt.verify(token.substring(7, token.length), NOT_SO_SECRET_SECRET_KEY);
    next();
  } catch (error) {
    return res.status(403).send('Nieprawidłowy token');
  }
}

// Login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'admin') {
    const token = jwt.sign({ username: username }, NOT_SO_SECRET_SECRET_KEY);
    res.status(200).send({ token });
  }
  res.status(401).send('Nieprawidłowe dane');
})

// Get all books
app.get('/api/books', async (req, res) => {
  const books = await Book.findAll();
  res.status(200).send(books);
})

// Get specific book
app.get('/api/books/:id', async (req, res) => {
  const book = await Book.findAll({where: {id: req.params.id}});
  if (book.length === 0) {
    res.status(404).send('Book not found');
  } else {
    res.status(200).send(book);
  }
})

// Add book
app.post('/api/books', verifyToken, async (req, res) => {
  const newBook = await Book.create({
    title: req.body.title,
    author: req.body.author,
    year: req.body.year  
  });

  res.status(201).send({ id: newBook.id });
})

// Remove specific book
app.delete('/api/books/:id', verifyToken, async (req, res) => {
  const removeBook = await Book.findByPk(req.params.id);
  if (!removeBook) {
    res.status(404).send('Book not found');
    return;
  }
  await removeBook.destroy();
  res.status(200).send({ id: req.params.id });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
