const { sequelize, checkConnection } = require('./db');
const User = require('./userModel');

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