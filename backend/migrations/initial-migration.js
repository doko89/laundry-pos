const sequelize = require('../config/database');
const User = require('../models/user');
const Customer = require('../models/customer');
const Worker = require('../models/worker');
const Service = require('../models/service');
const Order = require('../models/order');
const Bookkeeping = require('../models/bookkeeping');

const migrate = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Error synchronizing database:', error);
  } finally {
    await sequelize.close();
  }
};

migrate();