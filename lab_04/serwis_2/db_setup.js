const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './service2.db'
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

const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  quantity: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  bookId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: false
});

async function sync() {
  try {
    await Order.sync({ force: true });
    console.log('Table created successfully');
  } catch (error) {
    console.error('Unable to create table:', error);
  }
}

async function defaultPopulate() {
  console.log("Default data populated");
}

async function initializeDatabase() {
  await checkConnection();
  await sync();
  await defaultPopulate();
}

initializeDatabase().catch(console.error);

module.exports = { Order, sequelize };