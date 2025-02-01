const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Customer = require('./customer');
const Worker = require('./worker');
const Service = require('./service');

class Order extends Model {}

Order.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  orderId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  customerId: {
    type: DataTypes.INTEGER,
    references: {
      model: Customer,
      key: 'id'
    }
  },
  workerId: {
    type: DataTypes.INTEGER,
    references: {
      model: Worker,
      key: 'id'
    }
  },
  serviceId: {
    type: DataTypes.INTEGER,
    references: {
      model: Service,
      key: 'id'
    }
  },
  status: {
    type: DataTypes.ENUM('Diproses', 'Selesai'),
    allowNull: false
  },
  paymentStatus: {
    type: DataTypes.ENUM('Belum Dibayar', 'Sudah Dibayar'),
    allowNull: false
  },
  totalAmount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  sequelize,
  modelName: 'Order',
  timestamps: false
});

module.exports = Order;