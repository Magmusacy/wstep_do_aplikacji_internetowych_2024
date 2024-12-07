const express = require('express')
const app = express()
const port = 3000
const sqlite3 = require('sqlite3').verbose();
let sql;

const db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the database.');
});

app.get('/api/books', (req, res) => {
  sql = `SELECT * FROM books`;
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    // console.log(rows)
    res.status(200).send(rows);
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

sql = `SELECT * FROM books`;
db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    console.log(row);
  });
});