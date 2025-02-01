const express = require('express');
const router = express.Router();
const bookkeepingController = require('../controllers/bookkeepingController');

router.post('/', bookkeepingController.createEntry);
router.get('/', bookkeepingController.getAllEntries);
router.get('/:id', bookkeepingController.getEntryById);
router.put('/:id', bookkeepingController.updateEntry);
router.delete('/:id', bookkeepingController.deleteEntry);

module.exports = router;