const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.db'
});

async function checkConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

checkConnection();

const Book = sequelize.define(
  'Book',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    author: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    timestamps: false
  });

async function sync() {
  try {
    await Book.sync({ force: true });
    console.log('Table created successfully');
  } catch (error) {
    console.error('Unable to create table:', error);
  }
}

async function defaultPopulate() {
  await Book.create({
    title: 'Harry Potter and the philosopher\'s stone',
    author: 'J.K Rowling',
    year: 1997
  });

  await Book.create({
    title: 'Lalka',
    author: 'Bolesław Prus',
    year: 1890
  });

  await Book.create({
    title: 'Zbrodnia i kara',
    author: 'Fryderyk Nietchsze',
    year: 1866  
  });

  console.log("Default data populated");
}

async function initializeDatabase() {
  await checkConnection();
  await sync();
  await defaultPopulate();
}

initializeDatabase().catch(console.error);

module.exports = { Book, sequelize };