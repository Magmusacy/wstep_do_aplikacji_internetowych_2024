const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './service1.db'
});

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
    await sequelize.sync();
    console.log('Tables created successfully');
  } catch (error) {
    console.error('Unable to create tables:', error);
  }
}

sync();

module.exports = Book;