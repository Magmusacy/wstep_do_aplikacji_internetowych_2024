const { sequelize, checkConnection } = require('./db');
const Order = require('./orderModel');

async function sync() {
  try {
    await sequelize.sync({ force: true });
    console.log('Tables created successfully');
  } catch (error) {
    console.error('Unable to create tables:', error);
  }
}

async function initializeDatabase() {
  await checkConnection();
  await sync();
}

initializeDatabase().catch(console.error);