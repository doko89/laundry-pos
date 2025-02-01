const Order = require('../models/order');
const Customer = require('../models/customer');
const Worker = require('../models/worker');
const Service = require('../models/service');

exports.createOrder = async (req, res) => {
  try {
    const { order_id, customer_id, worker_id, service_id, status, payment_status, total_amount } = req.body;
    const order = await Order.create({ order_id, customer_id, worker_id, service_id, status, payment_status, total_amount });
    res.status(201).json({ message: 'Order created successfully', order });
  } catch (error) {
    res.status(500).json({ message: 'Error creating order', error });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [
        { model: Customer, as: 'customer' },
        { model: Worker, as: 'worker' },
        { model: Service, as: 'service' }
      ]
    });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders', error });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByPk(id, {
      include: [
        { model: Customer, as: 'customer' },
        { model: Worker, as: 'worker' },
        { model: Service, as: 'service' }
      ]
    });
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching order', error });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { order_id, customer_id, worker_id, service_id, status, payment_status, total_amount } = req.body;
    const order = await Order.findByPk(id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    order.order_id = order_id;
    order.customer_id = customer_id;
    order.worker_id = worker_id;
    order.service_id = service_id;
    order.status = status;
    order.payment_status = payment_status;
    order.total_amount = total_amount;
    await order.save();
    res.status(200).json({ message: 'Order updated successfully', order });
  } catch (error) {
    res.status(500).json({ message: 'Error updating order', error });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByPk(id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    await order.destroy();
    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting order', error });
  }
};