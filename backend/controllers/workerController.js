const Worker = require('../models/worker');

exports.createWorker = async (req, res) => {
  try {
    const { name, phone } = req.body;
    const worker = await Worker.create({ name, phone });
    res.status(201).json({ message: 'Worker created successfully', worker });
  } catch (error) {
    res.status(500).json({ message: 'Error creating worker', error });
  }
};

exports.getAllWorkers = async (req, res) => {
  try {
    const workers = await Worker.findAll();
    res.status(200).json(workers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching workers', error });
  }
};

exports.getWorkerById = async (req, res) => {
  try {
    const { id } = req.params;
    const worker = await Worker.findByPk(id);
    if (!worker) {
      return res.status(404).json({ message: 'Worker not found' });
    }
    res.status(200).json(worker);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching worker', error });
  }
};

exports.updateWorker = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, phone } = req.body;
    const worker = await Worker.findByPk(id);
    if (!worker) {
      return res.status(404).json({ message: 'Worker not found' });
    }
    worker.name = name;
    worker.phone = phone;
    await worker.save();
    res.status(200).json({ message: 'Worker updated successfully', worker });
  } catch (error) {
    res.status(500).json({ message: 'Error updating worker', error });
  }
};

exports.deleteWorker = async (req, res) => {
  try {
    const { id } = req.params;
    const worker = await Worker.findByPk(id);
    if (!worker) {
      return res.status(404).json({ message: 'Worker not found' });
    }
    await worker.destroy();
    res.status(200).json({ message: 'Worker deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting worker', error });
  }
};