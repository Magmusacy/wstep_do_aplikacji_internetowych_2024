const express = require('express')
const app = express()
const port = 3000
const sqlite3 = require('sqlite3').verbose();
let sql;

app.use(express.json());

const db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the database.');
});

// Get all books
app.get('/api/books', (req, res) => {
  sql = `SELECT * FROM books`;
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.status(200).send(rows);
  });
})

// Get specific book
app.get('/api/books/:id', (req, res) => {
  sql = `SELECT * FROM books WHERE id = ?`;
  db.all(sql, [req.params.id], (err, row) => {
    if (err) {
      throw err;
    }
    res.status(200).send(row);
  });
})

// Add book
app.post('/api/books', (req, res) => {
  sql = `INSERT INTO books (title, author, year) VALUES(?, ?, ?)`;
  db.run(sql, [req.body.title, req.body.author, req.body.year], function (err) {
    if (err) {
      throw err;
    }
    res.status(201).send({ id: this.lastID });
  });
})

// Remove specific book
app.delete('/api/books/:id', (req, res) => {
  sql = `DELETE FROM books WHERE id = ?`;
  db.run(sql, [req.params.id], function (err) {
    if (err) {
      throw err;
    }
    res.status(204).send({ id: req.params.id });
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
