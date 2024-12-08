const { DataTypes } = require('sequelize');
const { sequelize } = require('./db');

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

module.exports = Book;