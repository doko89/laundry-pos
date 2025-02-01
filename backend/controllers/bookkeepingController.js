const Bookkeeping = require('../models/bookkeeping');

exports.createEntry = async (req, res) => {
  try {
    const { owner_id, type, amount, description } = req.body;
    const entry = await Bookkeeping.create({ owner_id, type, amount, description });
    res.status(201).json({ message: 'Entry created successfully', entry });
  } catch (error) {
    res.status(500).json({ message: 'Error creating entry', error });
  }
};

exports.getAllEntries = async (req, res) => {
  try {
    const entries = await Bookkeeping.findAll();
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching entries', error });
  }
};

exports.getEntryById = async (req, res) => {
  try {
    const { id } = req.params;
    const entry = await Bookkeeping.findByPk(id);
    if (!entry) {
      return res.status(404).json({ message: 'Entry not found' });
    }
    res.status(200).json(entry);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching entry', error });
  }
};

exports.updateEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const { owner_id, type, amount, description } = req.body;
    const entry = await Bookkeeping.findByPk(id);
    if (!entry) {
      return res.status(404).json({ message: 'Entry not found' });
    }
    entry.owner_id = owner_id;
    entry.type = type;
    entry.amount = amount;
    entry.description = description;
    await entry.save();
    res.status(200).json({ message: 'Entry updated successfully', entry });
  } catch (error) {
    res.status(500).json({ message: 'Error updating entry', error });
  }
};

exports.deleteEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const entry = await Bookkeeping.findByPk(id);
    if (!entry) {
      return res.status(404).json({ message: 'Entry not found' });
    }
    await entry.destroy();
    res.status(200).json({ message: 'Entry deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting entry', error });
  }
};