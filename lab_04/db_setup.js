const sqlite3 = require('sqlite3').verbose();
let sql;

const db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the database.');
});


// CREATE TABLE
sql = `CREATE TABLE IF NOT EXISTS books(id INTEGER PRIMARY KEY, title TEXT, author TEXT, price REAL)`;
db.run(sql);

sql = `INSERT INTO books(title, author, price) VALUES(?, ?, ?)`;
db.run(sql, ['Harry Potter and the philosopher\'s stone', 'J.K Rowling', 1997]);
db.run(sql, ['Lalka', 'Bolesław Prus', 1890]);
db.run(sql, ['Zbrodnia i kara', 'Fryderyk Nietchsze', 1866]);

// DROP TABLE
// sql = `DROP TABLE IF EXISTS books`;
// db.run(sql);